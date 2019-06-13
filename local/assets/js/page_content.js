$(document).ready(function () {

  var $typeSelect = $('.ee-search-block .type-select');

  $typeSelect.find('> span').click(function () {

    $typeSelect.find('ul').toggle();



  });

  $typeSelect.find('li').click(function () {

    $typeSelect.find('input').val($(this).data('value'));
    $typeSelect.find('> span').text($(this).text());
    $typeSelect.find('ul').hide();
  });



  var sliders = [];

  $('.content-section .swiper-container').each(function () {

    var id = '#' + $(this).attr('id');

    var autoplay = $(id).data('autoplay-delay');

    autoplay = autoplay ? {delay: autoplay} : false;

    sliders.push(new Swiper (id, {


      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 14,
      //loopedSlides: 4,
      //loop: true,
      navigation: {
        nextEl: id + '-next',
        prevEl: id + '-prev',
      },

      autoplay: autoplay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    }));

  });



});