$(document).ready(function () {

  $('.ee-qa-slider').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      loop: true,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      },

      autoplay: delay,


    });





  });

});

