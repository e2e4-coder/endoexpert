$(document).ready(function () {

  $('.ee-article-image-slider').each(function () {

    var that = this;

    var largeSlider = new Swiper ($(this).find('.slider-large .swiper-container'), {

      effect : 'fade',
      fadeEffect: {
        crossFade: true
      },
      on: {

        init: function() {
          $(that).find('.slide-description').html($(that).find('.image-description').eq(0).html());
        },

        slideChange: function () {

          $(that).find('.slide-description').html($(that).find('.image-description').eq(largeSlider.activeIndex).html());

        }

      }


    });


    var smallSlider = new Swiper ($(this).find('.slider-small .swiper-container'), {

      direction : 'vertical',
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: $(this).find('.button-next'),
        prevEl: $(this).find('.button-prev'),
      },
      on : {

        click : function (e) {

          largeSlider.slideTo(smallSlider.clickedIndex);


        }

      }

    });


  });


});