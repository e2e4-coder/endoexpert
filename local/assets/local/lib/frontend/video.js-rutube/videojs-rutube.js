(function (root, factory) {
  if(typeof exports==='object' && typeof module!=='undefined') {
    const videojs = require('video.js');
    module.exports = factory(videojs.default || videojs);
  } else if(typeof define === 'function' && define.amd) {
    define(['videojs'], function(videojs){
      return (root.Rutube = factory(videojs));
    });
  } else {
    root.Rutube = factory(root.videojs);
  }
}(this, function(videojs) {
  'use strict';

  const _isOnMobile = videojs.browser.IS_IOS || videojs.browser.IS_NATIVE_ANDROID;
  const Tech = videojs.getTech('Tech');

  class Rutube extends Tech {

    constructor(options, ready) {

      super(options, ready);

      //this.setSrc(this.options_.source.src);
      //this.setPoster(this.options_.poster);
      //this.ready(ready);

      //

      //this.initRuTubePlayer();

      this.createIframe();

      window.addEventListener('message', this.onMessage.bind(this));

      //this.triggerReady();






    }

    dispose() {
      window.removeEventListener('message', this.onMessage.bind(this));
      this.iframe.remove();
      super.dispose();


    }

    createIframe() {
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('style', 'width:100%;height:100%;top:0;left:0;position:absolute');
      this.iframe.src = `https://rutube.ru/play/embed/${this.getVideoId(this.options_.source.src)}`;
      this.iframe.setAttribute('allow', 'autoplay; encrypted-media');
      this.iframe.setAttribute('allowfullscreen', 'true');
      this.iframe.setAttribute('frameborder', '0');

      // Событие готовности
      this.iframe.onload = () => {
        this.isIframeLoaded = true;

      };

      this.el().appendChild(this.iframe);
    }

    onStateChange(state) {

      switch (state) {
        case 'playing':
          this.trigger('play');
          break;
        case 'paused':
          this.trigger('pause');
          break;
        case 'stopped':
          this.trigger('ended');
          break;
      }
    }

    getVideoId(src) {

      let match = src.match(/rutube\.ru\/video\/(.*)/);

      return match ? match[1].replace('private/', '') : null;
    }

    onMessage(event) {

      try {
        const message = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

        //if (message.type !== 'player:currentTime') console.log(message);

        switch (message.type) {
          case 'player:ready':

            this.triggerReady();
            this.trigger('loadstart');
            break;
          case 'player:changeState':

            this.onStateChange(message.data.state);
            break;

          case 'player:adStart':
            this.trigger('play');
            break;

          case 'player:currentTime':

            this.currentTime_ =  message.data.time;
            this.trigger('timeupdate');
            break;

          case 'player:durationChange':

            this.duration_ =  message.data.duration;
            this.trigger('durationchange');
            break;

          case 'player:volumeChange':

            this.muted_ = message.data.muted;

            if (message.data.volume) {
              this.volume_ =  message.data.volume;
            }


            this.trigger('volumechange');
            break;

        }
      } catch (e) {
        console.warn('Invalid message received', e);
      }
    }


    postCommand(command) {

      if (!this.isIframeLoaded) return;

      //console.log('post-' + JSON.stringify(command));

      this.iframe.contentWindow.postMessage(JSON.stringify(command), '*');
    }

    play() {


      this.postCommand({ type: 'player:play', data: {} });
      this.unmute();
    }

    pause() {
      this.postCommand({ type: 'player:pause', data: {} });
    }

    stop() {
      this.postCommand({ type: 'player:stop', data: {} });
    }

    setCurrentTime(seconds) {
      this.postCommand({ type: 'player:setCurrentTime', data: { time: seconds } });
    }

    relativelySeek(seconds) {
      this.postCommand({ type: 'player:relativelySeek', data: { time: seconds } });
    }

    changeVideo(videoId) {
      this.postCommand({ type: 'player:changeVideo', data: { id: videoId } });
    }

    setSkinColor(color) {
      this.postCommand({ type: 'player:setSkinColor', data: { color: color } });
    }

    mute() {
      this.postCommand({ type: 'player:mute', data: {} });
    }

    unmute() {
      this.postCommand({ type: 'player:unMute', data: {} });
    }

    setVolume(volume) {
      this.postCommand({ type: 'player:setVolume', data: { volume: volume } });
    }

    volumeUp() {
      this.setVolumeChange(0.1);
    }

    volumeDown() {
      this.setVolumeChange(-0.1);
    }

    setVolumeChange(change) {
      this.postCommand({ type: 'player:setVolume', data: { change: change } });
    }

    duration() {
      return this.duration_;
    }

    setMuted() {

      if (this.muted_) {

        this.muted_ = false;
        this.unmute();

      } else {

        this.muted_ = true;
        this.mute();

      }


    }

    muted() {
      return this.muted_;
    }

    volume() {

      return this.volume_ ? this.volume_ / 100 : 1;
    }

    currentTime() {

      return this.currentTime_;
    }

    ended() {


    }

    paused() {
      //return true;
    }



  }

  Rutube.isSupported = function() {
    return true;
  };

  Rutube.canPlaySource = function(e) {
    return Rutube.canPlayType(e.type);
  };

  Rutube.canPlayType = function(e) {
    return (e === 'video/rutube');
  };

  Rutube.parseUrl = function(url) {
    var result = {
      videoId: null
    };

    var match = url.match(/rutube\.ru\/video\/([a-zA-Z0-9]+)/);

    if (match) {
      result.videoId = match[1];
    }


    return result;
  };


  function loadScript(src, callback) {
    var loaded = false;
    var tag = document.createElement('script');
    var firstScriptTag = document.getElementsByTagName('script')[0];
    if (!firstScriptTag) {
      // when loaded in jest without jsdom setup it doesn't get any element.
      // In jest it doesn't really make sense to do anything, because no one is watching rutube in jest
      return;
    }
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onload = function () {
      if (!loaded) {
        loaded = true;
        callback();
      }
    };
    tag.onreadystatechange = function () {
      if (!loaded && (this.readyState === 'complete' || this.readyState === 'loaded')) {
        loaded = true;
        callback();
      }
    };
    tag.src = src;
  }

  function injectCss() {
    var css = // iframe blocker to catch mouse events
        '.vjs-rutube .vjs-iframe-blocker { display: none; }' +
        '.vjs-rutube.vjs-user-inactive .vjs-iframe-blocker { display: block; }' +
        '.vjs-rutube .vjs-poster { background-size: cover; }' +
        '.vjs-rutube-mobile .vjs-big-play-button { display: none; }';

    var head = document.head || document.getElementsByTagName('head')[0];

    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }

  Rutube.apiReadyQueue = [];

  if (typeof document !== 'undefined'){
    injectCss();
  }

  // Older versions of VJS5 doesn't have the registerTech function
  if (typeof videojs.registerTech !== 'undefined') {
    videojs.registerTech('Rutube', Rutube);
  } else {
    videojs.registerComponent('Rutube', Rutube);
  }
}));