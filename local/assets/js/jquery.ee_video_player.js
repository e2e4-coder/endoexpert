(function ($) {


  $.fn.ee_video_player = function() {


    var options = {
      "playbackRates": [0.5, 1, 1.5, 2],
      "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.data('youtube-src')}]
    };

    var $pauseOverlayTop = $(this.data('pause-overlay-top-src'));
    var $pauseOverlayBottom = $(this.data('pause-overlay-bottom-src'));

    var pauseOverlayTopCanHide = false;


    var player = videojs(this[0], options, function onPlayerReady() {

      var $el = $(player.el_);
      var vjsOverlayPrepended = false;

      $pauseOverlayTop.appendTo($el);
      $pauseOverlayBottom.appendTo($el);

      $el.find('.vjs-control-bar').css('z-index', 999);

      player.on('play', function () {

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

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();




      });

      player.on('stop', function () {

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();


      });







    });


    console.log();

    return this;

  };


}(jQuery));

