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

        if (data[0] && data[0].src) {

          player.src({src: data[0].src, type: 'video/youtube'});

          var $playlist = $('<div class="ee-video-playlist"></div>').appendTo($el.closest('.video-player-wrapper'));

           for (var i=0;i<data.length;i++) {

            $('<div class="ee-video-playlist__item" data-src="' + data[i].src + '">' +
                '<div class="ee-video-playlist__item-thumb"><span><img src="'+data[i].thumbnail.url+'"></span></div>' +
                '<div class="ee-video-playlist__item-title">'+data[i].title+'</div>' +
              '</div>').appendTo($playlist);

          }

          $playlist.find('.ee-video-playlist__item').eq(0).addClass('active');

          $playlist.find('.ee-video-playlist__item').click(function () {

            $playlist.find('.ee-video-playlist__item').removeClass('active');

            $(this).addClass('active');

            player.src({src: $(this).data('src'), type: 'video/youtube'});
            player.play();

          });


        }



      });

    }


    return this;

  };


}(jQuery));

