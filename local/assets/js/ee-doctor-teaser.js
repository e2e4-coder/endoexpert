$(document).ready(function () {


  $('.ee-doctor-teaser .expand-toggle').click(function () {

    $(this).toggleClass('-active');
    $(this).prev().slideToggle();

  });


  $('.ee-doctor-teaser .day-slider').each(function () {

    var $swiper = $(this).find('.swiper-container');

    new Swiper ($swiper, {

      slidesPerView: 7,
      spaceBetween: 6,
      loop: false,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      }

    });

  });






});