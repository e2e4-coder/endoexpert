
$(document).ready(function () {

  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());

  });

  $('.ee-search-block-2 .last-queries .expand-toggle').click(function () {

    $(this).parent().addClass('-expanded');

  });


  $('.char-counter').charCounter();


  $('.slider-wrapper-type-1').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      slidesPerView: 3,
      slidesPerGroup: 3,
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


  $('.js-add-answer').click(function () {

    $('#answer-popup').find('.js-element-id').val($(this).data('element-id'));

    showPopup({src:'#answer-popup'});

  });

});

