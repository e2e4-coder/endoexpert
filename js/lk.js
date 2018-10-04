$(document).ready(function () {


  var lkSlider = new Swiper ('#lk-slider', {

    pagination: {
      el: '#lk-slider .swiper-pagination',
      clickable: true
    },
    loop: true
  });

  $('.lk-comments-views-rating .rating select').each(function () {

    $(this).barrating({
      theme: 'small-white-stars',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });


  $('.add-to-favorite').click(function () {

    var that = this;

    $.post('json/get-one.json', {

      action: 'add-to-favorite',
      iblock_id : $(this).closest('.lk-news-module').data('iblock-id'),
      element_id : $(this).closest('.lk-news-module').data('element-id'),

    }, function (data) {

      if (data === 1) {$(that).addClass('active');} else {$(that).removeClass('active');}

    });

  });

  $('.add-to-learn').click(function () {

    var that = this;

    $.post('json/get-one.json', {

      action: 'add-to-learn',
      iblock_id : $(this).closest('.lk-news-module').data('iblock-id'),
      element_id : $(this).closest('.lk-news-module').data('element-id'),

    }, function (data) {

      if (data === 1) {$(that).addClass('active');} else {$(that).removeClass('active');}

    });

  });



});