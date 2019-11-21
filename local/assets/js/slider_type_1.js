$(document).ready(function () {

  $('.slider-wrapper-type-1').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      slidesPerView: 4,
      slidesPerGroup: 4,
      loopedSlides: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      },

      autoplay: delay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });





  });

});

