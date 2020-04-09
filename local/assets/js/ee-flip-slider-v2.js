(function ( $ ) {

  $.fn.ee_flip_slider_v2 = function() {

    function detectHeight($el) {

      var arr = [];

      $el.find('.slide-item > *').each(function () {

        arr.push($(this).height());

      });

      return Math.max.apply(null, arr) + 'px';



    }

    function setActiveSlide($el, frontIndex) {

      var $slides = $el.find('.slide-item');

      var backIndex = frontIndex === $slides.length - 1 ? 0 : frontIndex + 1;

      $slides.eq(frontIndex).removeClass('-back').addClass('-front').show();
      $slides.eq(backIndex).removeClass('-front').addClass('-back').show();

      $slides.each(function (i) {

        if (i !== frontIndex && i !== backIndex) {

          $(this).removeClass('-front').addClass('-back').hide();
        }

      });

    }

    var $wrappers = this.find('.slider-wrapper');
    var shake = false;

    $(document).scroll(function () {

      if (!shake) {

        shake = true;

        $wrappers.css('transition', 'transform .5s').css('transform', 'rotateY(10deg)');

        setTimeout(function () {

          shake = false;
          $wrappers.css('transition', 'transform .5s').css('transform', 'rotateY(0deg)');

        }, 1000);

      }



    });


    return this.each(function () {

      var $slider = $(this);

      $(this).css( "height", detectHeight($(this)));

      var activeSlide = 0;

      var totalSlides = $slider.find('.slide-item').length;

      var flipStarted = false;

      setActiveSlide($slider, activeSlide);


      $(this).find('.flip-toggle').click(function () {

        if (activeSlide>= totalSlides-1) return;

        flipStarted = true;

        $slider.find('.slider-wrapper').css('transition', 'transform 1s').css('transform', 'rotateY(180deg)').on('webkitTransitionEnd', function () {

          if (flipStarted) {
            $(this).css('transition', 'none').css('transform', 'rotateY(0deg)');

            flipStarted = false;

            if (activeSlide < totalSlides-1) setActiveSlide($slider, ++activeSlide);
          }






        });






      });



    });

  };


  $(document).ready(function () {

    $('.ee-flip-slider-v2').ee_flip_slider_v2();

  });


}( jQuery ));