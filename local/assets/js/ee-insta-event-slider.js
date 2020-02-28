$(document).ready(function () {

  $('.ee-insta-event-slider').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      slidesPerView: 3,
      spaceBetween: 26,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      },

      autoplay: delay,

      breakpoints: {

        1023: {
          slidesPerView: 1

        }
      }
    });





  });

});

