$(document).ready(function () {

  var slider = new Swiper ('#quacol-main-slider', {

    pagination: {
      el: '#quacol-main-slider .swiper-pagination',
      clickable: true
    },
    loop: true
  });




  var newsSlider = new Swiper ('#quacol-news-slider', {

    pagination: {
      el: '#quacol-news-slider .swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.quacol-news-slider-wrapper .swiper-button-next',
      prevEl: '.quacol-news-slider-wrapper .swiper-button-prev',
    },

    spaceBetween: 19,
    slidesPerView: 3,
    loop: true
  });

  $('.edu-module-detail input[type=radio]').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    //increaseArea: '20%' // optional
  });

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'icheckbox_quacol',
    //increaseArea: '20%' // optional
  });

  $('.module-rating-stars select').each(function () {

    $(this).barrating({
      theme: 'css-stars',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });

  $('.rating-stars select').barrating({
    theme: 'css-stars',
    allowEmpty: true,
    emptyValue: 0,
    initialRating: 0,

  });



});