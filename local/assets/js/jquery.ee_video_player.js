(function ($) {


  $.fn.ee_video_player = function() {

    var $el;

    var options = {
      "playbackRates": [0.5, 1, 1.5, 2],
      "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.data('youtube-src')}]
    };

    var m = this.data('youtube-src').match(/list=([^&]*)/);
    var playlistId = m ? m[1] : undefined;
    var playlistLength;
    var playlistCurrentIndex;

    var $pauseOverlayTop = $(this.data('pause-overlay-top-src'));
    var $pauseOverlayBottom = $(this.data('pause-overlay-bottom-src'));

    var userId = this.data('user-id');
    var videoId = this.data('video-id');

    var endTime = this.data('end-time') ? new Date(this.data('end-time')) : false;

    var statUrl = this.data('stat-url');
    var statInterval = this.data('stat-interval')*1000;
    var canSendTimeUpdateEvent = false;

    var pauseOverlayTopCanHide = false;
    var pauseOverlayTopTimeout;

    var popupSound = new Audio('/bitrix/js/im/audio/new-message-1.mp3');

    var confirmPopupSrc = this.data('confirm-popup-src');
    var confirmInterval = this.data('confirm-interval') * 60 * 1000;
    var confirmApiUrl = this.data('confirm-api-url');
    var confirmTimeout;

    var votePopupSrc = this.data('vote-popup-src');
    var votePopupTime = this.data('vote-popup-time');
    var voteApiUrl = this.data('vote-api-url');
    var votePopupTimeIsDate = votePopupTime && votePopupTime.toString().indexOf('-') > 0;
    if (votePopupTimeIsDate) { votePopupTime = new Date(votePopupTime); }
    var votePopupCanShow = !!votePopupSrc;

    var counterSrc = this.data('counter-src');
    var counterStart = this.data('counter-start');

    var fingerprint = '';

    var videoBeforeUrl = this.data('video-before');
    var videoAfterUrl = this.data('video-after');

    var playlistVideoStartTime = this.data('playlist-video-start-time');

    var player = videojs(this[0], options, function onPlayerReady() {

      FingerprintJS.load().then(function (fp) {
         fp.get().then(function (result) {

          fingerprint = result.visitorId;

        });
      });

      $el = $(player.el_);

      if (playlistId) {
        loadPlaylist(playlistId);
      }

      var vjsOverlayPrepended = false;

      $pauseOverlayTop.appendTo($el);
      $pauseOverlayBottom.appendTo($el);

      $el.find('.vjs-control-bar').css('z-index', 999);

      var duration = 0;

      if (videoBeforeUrl) {

        var $videoBefore = $('<div class="ee-video-player__ad"><video><source src="' + videoBeforeUrl + '" type="video/mp4"></video></div>').appendTo($el);

        var videoBeforeShown = false;

        $el.css('pointer-events', 'none');

        $el.parent().css('cursor', 'pointer').click(function () {

          if (videoBeforeShown) return;

          //$el.find('.vjs-control-bar').hide();

          $videoBefore.show();
          $videoBefore.find('video')[0].play();
          $videoBefore.find('video')[0].onended = function () {

            $videoBefore.hide();
            player.play();
            videoBeforeShown = true;

            $el.css('pointer-events', 'auto');
            //$el.find('.vjs-control-bar').show();
          };

        });


      }

      if (videoAfterUrl) {

        var $videoAfter = $('<div class="ee-video-player__ad"><video><source src="' + videoAfterUrl + '" type="video/mp4"></video></div>').appendTo($el);

        var videoAfterShown = false;

      }

      player.on('play', function () {

        if (playlistVideoStartTime && Math.floor(player.currentTime()) < playlistVideoStartTime) {

          player.currentTime(playlistVideoStartTime);

        }

        duration = player.duration();

        sendVideoStats('play', {});

        if (!vjsOverlayPrepended) {

          $el.prepend('<div class="ee-video-js-overlay"></div>');
        }

        if ($pauseOverlayTop.length) {

          $pauseOverlayTop.show();

          pauseOverlayTopTimeout = setTimeout(function () {

            pauseOverlayTopCanHide = true;
            $pauseOverlayTop.fadeOut();

          }, 5000);

        }



        //if ($pauseOverlayTop.length && pauseOverlayTopCanHide) $pauseOverlayTop.fadeOut();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.fadeOut();



        if (confirmPopupSrc) {

          $('#force-confirm').show();

          clearTimeout(confirmTimeout);
          confirmTimeout = setTimeout(showConfirmPopup, confirmInterval);
        }






      });

      player.on('pause', function () {

        sendVideoStats('pause', {});

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();

        clearTimeout(confirmTimeout);
        clearTimeout(pauseOverlayTopTimeout);


      });

      player.on('stop', function () {

        sendVideoStats('stop', {});

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();
        if ($pauseOverlayBottom.length) $pauseOverlayBottom.show();

        clearTimeout(confirmTimeout);
        clearTimeout(pauseOverlayTopTimeout);


      });

      player.on('timeupdate', function(e,ee) {

        if (canSendTimeUpdateEvent) {

          sendVideoStats('timeupdate', {currentTime: player.currentTime()});
          canSendTimeUpdateEvent = false;

        }

        if (votePopupCanShow) {

            //console.log(votePopupCanShow);

            if (votePopupTimeIsDate && Date.now() > votePopupTime || !votePopupTimeIsDate && duration && duration - player.currentTime() < votePopupTime) {

                showVotePopup();
                votePopupCanShow = false;
            }
        }


      });

      player.on('ended', function () {

        if ($pauseOverlayTop.length) $pauseOverlayTop.show();

        if (videoAfterUrl) {

          player.pause();

          $el.find('.vjs-control-bar').hide();

          $videoAfter.show();
          $videoAfter.find('video')[0].play();
          $videoAfter.find('video')[0].onended = function () {

            $videoAfter.hide();
            videoAfterShown = true;
            $el.find('.vjs-control-bar').show();
          }

        }

        if (playlistId) {

          var nextIndex = playlistCurrentIndex === playlistLength-1 ? 0 : playlistCurrentIndex + 1;

          $el.closest('.video-player-wrapper').find('.ee-video-playlist__item').eq(nextIndex).trigger('click');

        }

      });

      if (statUrl) {

        setInterval(function () {

          canSendTimeUpdateEvent = true;

        }, statInterval);
      }

      if (confirmPopupSrc) {

        $(confirmPopupSrc).find('.js-confirm').click(function () {

          player.play();

          $.magnificPopup.close();

          sendVideoStats('confirm', {currentTime: player.currentTime()});

          $.post(confirmApiUrl, {
            user_id:userId,
            video_id:videoId,
            current_time: player.currentTime()
          }, function () {});

          clearTimeout(confirmTimeout);
          confirmTimeout = setTimeout(showConfirmPopup, confirmInterval);

        });

        $('#force-confirm').click(function () {

          //showConfirmPopup();
          //clearTimeout(confirmTimeout);
          //confirmTimeout = setTimeout(showConfirmPopup, confirmInterval);

          $(this).css('transition', 'all .5s ease-in').css('background', 'darkgreen').css('color', 'white').text('Присутствие подтверждено');


          sendVideoStats('confirm', {currentTime: player.currentTime()});

          $.post(confirmApiUrl, {
            user_id:userId,
            video_id:videoId,
            current_time: player.currentTime()
          }, function () {});

          var that = this;

          setTimeout(function () {

            $(that).removeAttr('style').text('Подтвердить присутствие')

          }, 1000 * 10)

        });

        function startWebsocket() {
          var ws = new WebSocket('wss://endoexpert.ru:3001');

          ws.onmessage = function(e){

            var data = JSON.parse(e.data);

            if (data.ACTION === 'SHOW_CONFIRM') {
              showConfirmPopup();
              clearTimeout(confirmTimeout);
              confirmTimeout = setTimeout(showConfirmPopup, confirmInterval);
            }

            if (data.ACTION === 'HIDE_CONFIRM') {

              $.magnificPopup.close();

            }



          };

          ws.onclose = function(){
            ws = null;
            setTimeout(startWebsocket, 5000);
          }
        }

        startWebsocket();


      }

      if (votePopupSrc) {

          $(votePopupSrc).find('form').submit(function (e) {

              e.preventDefault();

              $.magnificPopup.close();

              $.post(voteApiUrl, {
                  user_id:userId,
                  video_id:videoId,
                  vote: $(this).find('select[name=vote]').val(),
                  comment: $(this).find('textarea[name=comment]').val()
              }, function () {});

          });

      }

      if (counterSrc) {


          var $timeCounter = $(counterSrc);

          setTime(counterStart);

          setInterval(function () {

              if (!player.paused()) {

                  setTime(++counterStart);

              }

          }, 60000);


          function setTime(t) {

              var minutes = (t % 60).toString();

              $timeCounter.find('.d4').text(minutes.slice(-1));
              $timeCounter.find('.d3').text(minutes.length > 1 ? minutes.slice(0, 1) : 0);

              var hours = Math.floor(t / 60).toString();

              $timeCounter.find('.d2').text(hours.slice(-1));
              $timeCounter.find('.d1').text(hours.length > 1 ? hours.slice(0, 1) : 0);

          }

      }


    });


    function sendVideoStats(event, data) {

      if (!statUrl) return false;

      data.userAgent = navigator.userAgent;
      data.fingerprint = fingerprint;

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

          playlistLength = data.items.length;
          playlistCurrentIndex = 0;

          var $plIcon = $('<div class="ee-video-playlist-icon"><svg height="100%" viewBox="0 0 36 36"><use class="ytp-svg-shadow" xlink:href="#ytp-id-23"></use><path d="m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z" fill="#fff"></path></svg></div>').appendTo($el.closest('.video-player-wrapper'));

          var $pl = $('<div class="ee-video-playlist"></div>').appendTo($el.closest('.video-player-wrapper'));

          var $header = $('<div class="ee-video-playlist__header"><button class="ee-video-playlist__close" aria-label="Закрыть"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button></div>').appendTo($pl);

          $('<div class="ee-video-playlist__title">'+data.title+'</div>').appendTo($header);

          var $playlist = $('<div class="ee-video-playlist__list"></div>').appendTo($pl);

           for (var i=0;i<data.items.length;i++) {

            $('<div class="ee-video-playlist__item" data-index="' + i + '" data-src="' + data.items[i].src + '">' +
                '<div class="ee-video-playlist__item-thumb"><span><img src="'+data.items[i].thumbnail.url+'"></span></div>' +
                '<div class="ee-video-playlist__item-title">'+data.items[i].title+'</div>' +
              '</div>').appendTo($playlist);

          }

          $playlist.find('.ee-video-playlist__item').eq(0).addClass('active');

          $playlist.find('.ee-video-playlist__item').click(function () {

            $playlist.find('.ee-video-playlist__item').removeClass('active');

            $(this).addClass('active');

            playlistCurrentIndex = $(this).data('index');

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

    function showConfirmPopup() {


      if (endTime && Date.now() > endTime) {
        return;
      }

      //player.pause();
      popupSound.play();

      if ($(window).width() <= 768) {

        //document.exitFullscreen();
        //document.getElementsByTagName('video')[0].webkitExitFullScreen();


      }

      showPopup({src:confirmPopupSrc, modal: true, prependTo: $el[0]});

    }

    function showVotePopup() {

          $(votePopupSrc).find('select').barrating({
              theme: 'fa-stars-gold2',
              initialRating: 0,
              readonly: false,
              allowEmpty: true,
              emptyValue: 0,
          });

          popupSound.play();


          showPopup({
              src: votePopupSrc,
              modal: false,
              prependTo: $el[0]
          });


      }


    return this;

  };


}(jQuery));

