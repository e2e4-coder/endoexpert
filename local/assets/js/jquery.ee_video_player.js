(function ($) {


  $.fn.ee_video_player = function() {


    var options = {
      "playbackRates": [0.5, 1, 1.5, 2],
      "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.data('youtube-src')}]
    };

    var $pauseOverlay = $(this.data('pause-overlay-src'));


    var player = videojs(this[0], options, function onPlayerReady() {


      $pauseOverlay.appendTo($(player.el_));
      $(player.el_).find('.vjs-control-bar').css('z-index', 999);

      player.on('play', function () {

        if ($pauseOverlay.length) $pauseOverlay.fadeOut();




      });

      player.on('pause', function () {

        if ($pauseOverlay.length) $pauseOverlay.fadeIn();




      });

      player.on('stop', function () {

        if ($pauseOverlay.length) $pauseOverlay.fadeIn();


      });







    });


    console.log();

    return this;

  };


}(jQuery));

