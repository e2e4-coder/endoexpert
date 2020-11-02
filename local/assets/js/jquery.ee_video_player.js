(function ($) {


  $.fn.ee_video_player = function() {

    var $el;

    var options = {
      "playbackRates": [0.5, 1, 1.5, 2],
      "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.data('youtube-src')}]
    };

    var m = this.data('youtube-src').match(/list=([^&]*)/);
    var playlistId = m ? m[1] : undefined;

    var $pauseOverlayTop = $(this.data('pause-overlay-top-src'));
    var $pauseOverlayBottom = $(this.data('pause-overlay-bottom-src'));

    var userId = this.data('user-id');
    var videoId = this.data('video-id');

    var statUrl = this.data('stat-url');
    var statInterval = this.data('stat-interval')*1000;
    var canSendTimeUpdateEvent = false;

    var pauseOverlayTopCanHide = false;


    var player = videojs(this[0], options, function onPlayerReady() {

      $el = $(player.el_);

      if (playlistId) {
        loadPlaylist(playlistId);
      }

      var vjsOverlayPrepended = false;

      $pauseOverlayTop.appendTo($el);
      $pauseOverlayBottom.appendTo($el);

      $el.find('.vjs-control-bar').css('z-index', 999);

      player.on('play', function () {

        sendVideoStats('play', {});

        if (!vjsOverlayPrepended) {

          $el.prepend('<div class="ee-video-js-overlay"></div>');
        }

        if (!pauseOverlayTopCanHide && $pauseOverlayBottom.length) {

          $pauseOverlayTop.show();

          setTimeout(function () {

            pauseOverlayTopCanHide = true;
            $pauseOverlayTop.fadeOut();

          }, 3000);

        }



        if ($pauseOverlayTop.length && pauseOverlayTopCanHide) $pauseOverlayTop.fadeOut();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.fadeOut();




      });

      player.on('pause', function () {

        sendVideoStats('pause', {});

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();






      });

      player.on('stop', function () {

        sendVideoStats('stop', {});

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();


      });

      player.on('timeupdate', function(e,ee) {

        if (canSendTimeUpdateEvent) {

          sendVideoStats('timeupdate', {currentTime: player.currentTime()});
          canSendTimeUpdateEvent = false;

        }


      });

      if (statUrl) {

        setInterval(function () {

          canSendTimeUpdateEvent = true;

        }, statInterval);
      }


    });


    function sendVideoStats(event, data) {

      if (!statUrl) return false;

      $.post(statUrl, {
        event: event,
        videoId: videoId,
        userId: userId,
        data:data
      });

      /*
            ws.send(JSON.stringify({
              event: event,
              videoId: videoId,
              userId: userId,
              data:data
            }));*/




    }

    function loadPlaylist(playlistId) {

      $.getJSON('/pl.php?id=' + playlistId, function (data) {

        if (data.items && data.items[0].src) {

          player.src({src: data.items[0].src, type: 'video/youtube'});

          var $plIcon = $('<div class="ee-video-playlist-icon"><svg height="100%" viewBox="0 0 36 36"><use class="ytp-svg-shadow" xlink:href="#ytp-id-23"></use><path d="m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z" fill="#fff"></path></svg></div>').appendTo($el.closest('.video-player-wrapper'));

          var $pl = $('<div class="ee-video-playlist"></div>').appendTo($el.closest('.video-player-wrapper'));

          var $header = $('<div class="ee-video-playlist__header"><button class="ee-video-playlist__close" aria-label="Закрыть"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button></div>').appendTo($pl);

          $('<div class="ee-video-playlist__title">'+data.title+'</div>').appendTo($header);

          var $playlist = $('<div class="ee-video-playlist__list"></div>').appendTo($pl);

           for (var i=0;i<data.items.length;i++) {

            $('<div class="ee-video-playlist__item" data-src="' + data.items[i].src + '">' +
                '<div class="ee-video-playlist__item-thumb"><span><img src="'+data.items[i].thumbnail.url+'"></span></div>' +
                '<div class="ee-video-playlist__item-title">'+data.items[i].title+'</div>' +
              '</div>').appendTo($playlist);

          }

          $playlist.find('.ee-video-playlist__item').eq(0).addClass('active');

          $playlist.find('.ee-video-playlist__item').click(function () {

            $playlist.find('.ee-video-playlist__item').removeClass('active');

            $(this).addClass('active');

            player.src({src: $(this).data('src'), type: 'video/youtube'});
            player.play();

          });

          $plIcon.click(function () {

            $pl.css('display', 'flex');

          });

          $header.find('.ee-video-playlist__close').click(function () {

            $pl.css('display', 'none');

          });


        }



      });

    }


    return this;

  };


}(jQuery));

