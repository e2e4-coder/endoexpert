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

  const Tech = videojs.getComponent('Tech');

  class VK extends Tech {
    constructor(options, ready) {
      super(options, ready);

      this.setSrc(this.options_.source.src);
      this.setPoster(this.options_.poster);
      this.ready(ready);
    }

    setSrc(src) {
      this.src_ = src;
    }

    setPoster(poster) {
      this.poster_ = poster;
    }

    getVideoParams(src) {
      // Извлекаем параметры видео из URL
      let match = src.match(/vk\.com\/video_ext\.php\?(.+)/);
      return match ? match[1] : null;
    }

    createEl() {
      let el = super.createEl('div', {
        className: 'vjs-vk'
      });

      el.style.backgroundImage = `url(${this.options_.poster})`;
      el.style.backgroundSize = 'cover';

      this.iframeEl = document.createElement('iframe');
      this.iframeEl.src = `https://vk.com/video_ext.php?${this.getVideoParams(this.options_.source.src)}&js_api=1`;
      this.iframeEl.id = 'vk-player';
      this.iframeEl.frameBorder = '0';
      this.iframeEl.allow = 'autoplay; fullscreen';
      this.iframeEl.setAttribute('allowfullscreen', '');
      this.iframeEl.setAttribute('style', 'width:100%;height:100%;top:0;left:0;position:absolute;pointer-events:none;');


      el.appendChild(this.iframeEl);


      this.initVKPlayer();

      this.iframeEl.blur();

      return el;
    }

    initVKPlayer() {

      if (window.VK) return;

      const script = document.createElement('script');

      script.src = 'https://vk.com/js/api/videoplayer.js';
      document.head.appendChild(script);


      script.onload = () => {

        this.VKPlayer = window.VK.VideoPlayer(this.iframeEl);

        this.VKPlayer.on('inited', (state) => {

          this.triggerReady();

          this.duration_ =  state.duration;
          this.trigger('durationchange');

          //this.trigger('loadstart');

        });

        this.VKPlayer.on('timeupdate', (state) => {

          this.currentTime_ =  state.time;
          this.trigger('timeupdate');

        });

        this.VKPlayer.on('volumechange', (state) => {

          this.trigger('volumechange');

        });

        this.VKPlayer.on('started', (state) => {

          this.trigger('play');

        });

        this.VKPlayer.on('resumed', (state) => {

          this.trigger('play');

        });

        this.VKPlayer.on('paused', (state) => {

          this.trigger('pause');

        });

        this.VKPlayer.on('ended', (state) => {

          this.trigger('ended');

        });

      };

    }

    duration() {

      return this.VKPlayer.getDuration();
    }

    volume() {
      return this.VKPlayer.getVolume();
    }

    muted() {
      return this.VKPlayer.isMuted();
    }

    currentTime() {

      return this.VKPlayer.getCurrentTime();
    }

    ended() {

      return this.VKPlayer.getState() === 'ended';

    }

    paused() {

      return this.VKPlayer.getState() === 'paused';
    }

    play() {

      this.VKPlayer.play();
    }

    pause() {

      this.VKPlayer.pause();
    }

    stop() {

    }

    setCurrentTime(seconds) {

      this.VKPlayer.seek(seconds);
    }

    mute() {

      this.VKPlayer.mute();

    }

    unmute() {

      this.VKPlayer.unmute();

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

    setVolume(volume) {

      this.VKPlayer.setVolume(volume);

    }

    dispose() {
      super.dispose();
    }
  }

  VK.prototype.options_ = {};

  VK.isSupported = function() {
    return true; // Проверка, поддерживается ли браузером VK
  };

  VK.canPlaySource = function(srcObj) {
    return srcObj.src.indexOf('vk.com/video_ext.php') !== -1;
  };

  VK.canPlayType = function(e) {
    return (e === 'video/vk');
  };

  videojs.registerTech('VK', VK);
}));