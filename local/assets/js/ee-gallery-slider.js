$(document).ready(function () {


  $('.ee-gallery-slider').each(function () {

    var that = this;

    var smallSlider = new Swiper ($(this).find('.slider-small .swiper-container'), {


      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      },
      on : {

        click : function (e) {

          largeSlider.slideTo(smallSlider.clickedIndex);


        }

      }

    });

    var largeSlider = new Swiper ($(this).find('.slider-large .swiper-container'), {

      effect : 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: smallSlider
      },
      on: {

        init: function() {

        },

        slideChange: function (e) {




        }

      }


    });





  });

});