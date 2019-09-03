$(document).ready(function () {

  var isAnimationRunning = false;

  $(window).scroll(function (e) {

    if (!isAnimationRunning) {

      isAnimationRunning = true;

      var $slides = $('.ee-flip-slider .swiper-slide-active');

      var translate3d = [];

      $slides.animate(
          { deg: 15 },
          {
            duration: 500,
            step: function(now) {
              $(this).css({ transform: 'translate3d('+translate3d[$(this).index()]+', 0px, 0px) rotateX(0deg) rotateY(' + now + 'deg)' });
            },
            start: function() {

              translate3d[$(this).index()] = $(this).css('transform').split(', ')[4] + 'px';

            },
            complete: function () {

              $slides.animate(
                  { deg: 0 },
                  {
                    duration: 500,
                    step: function(now) {
                      $(this).css({ transform: 'translate3d('+translate3d[$(this).index()]+', 0px, 0px) rotateX(0deg) rotateY(' + now + 'deg)' });
                    },
                    complete: function () {

                      isAnimationRunning = false;
                    }
                  }
              );
            }
          }
      );



    }

  });


  $('.ee-flip-slider').each(function () {

    new Swiper(this, {
      effect: 'flip',
      //loop: true,
      //grabCursor: true,

      on: {
        click: function (e) {

          if (e.offsetY > 60) {

            if (e.offsetX > this.size / 2) {

              this.slideNext();

            } else {

              this.slidePrev();

            }

          }




        }
      }



    });

  });

  $('.ee-flip-slider .flip-toggle').click(function () {

    $(this).parent()[0].swiper.slideNext(1000);

  });



  $('.ee-flip-slider .rating-section select').each(function () {

    $(this).change(function () {

      $.post($(this).data('api-url'), {

        rating : $(this).val(),
        id : $(this).data('element-id'),

      }, function () {


      });

    }).barrating({
      theme: 'fa-stars-gold2',
      initialRating: $(this).data('current-rating'),
      readonly: !!$(this).data('voted'),
      allowEmpty: true,
      emptyValue: 0,
    });

  });



  $('.ee-flip-slider').find('textarea, .form-actions').click(function (e) {

    e.stopPropagation();

  });




});