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

      direction : $(window).width() > 768 ? 'vertical' : 'horizontal',
      slidesPerView: $(window).width() > 768 ? 3 : 'auto',
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


  var fullScreenLargeSlider;
  var fullScreenSmallSlider;


  $('.slider-large').on('click', '.swiper-slide', function () {

    $('.full-screen-wrapper').show();

    if (fullScreenLargeSlider === undefined) {

      $('.slider-large .swiper-slide').each(function () {

        $('#full-screen-large-slider .swiper-wrapper').append('<div class="swiper-slide" style="background-image: url('+$(this).find('img').attr('src')+')"></div>');

      });

      $('.slider-small .swiper-slide').each(function () {

        $('#full-screen-small-slider .swiper-wrapper').append('<div class="swiper-slide">'+$(this).html()+'</div>');

      });


      fullScreenLargeSlider = new Swiper ('#full-screen-large-slider', {

        effect : 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: $('#full-screen-large-slider-next'),
          prevEl: $('#full-screen-large-slider-prev')
        },
        on: {

          init: function() {
            $('#full-screen-slide-description').html($('.slider-large .image-description').eq(0).html());
          },

          slideChange: function () {

            $('#full-screen-slide-description').html($('.slider-large .image-description').eq(fullScreenLargeSlider.activeIndex).html());

            $('.slides-counter').text(1+fullScreenLargeSlider.realIndex + ' / ' + fullScreenLargeSlider.slides.length);

            fullScreenSmallSlider.slideTo(fullScreenLargeSlider.realIndex);

            $('#full-screen-small-slider .swiper-slide').removeClass('-selected').eq(fullScreenLargeSlider.realIndex).addClass('-selected');


          }

        }


      });

      $('.slides-counter').text(1+fullScreenLargeSlider.realIndex + ' / ' + fullScreenLargeSlider.slides.length);

      $('#full-screen-small-slider .swiper-slide').eq(0).addClass('-selected');




      fullScreenSmallSlider = new Swiper ($('#full-screen-small-slider'), {

        slidesPerView: 'auto',
        spaceBetween: 10,
        on : {

          click : function (e) {

            fullScreenLargeSlider.slideTo(fullScreenSmallSlider.clickedIndex);


          }

        }

      });

    }

    fullScreenLargeSlider.slideTo($(this).index());
    fullScreenSmallSlider.slideTo($(this).index());



  });

  $('#js-close-full-screen-slider').click(function () {

    $(this).parent().hide();

  });

  //$('.slider-large .swiper-slide').eq(0).trigger('click');


});