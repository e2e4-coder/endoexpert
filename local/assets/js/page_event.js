
$(document).ready(function () {


  $('.event-rating select').each(function () {

    $(this).barrating({
      theme: 'fa-stars-gold2',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });


  $('.event-top .ico-favorite').click(function () {

    var that = this;

    $(this).toggleClass('-active');

    $.ajax({
      url: $(this).data('api-url'),
      dataType: 'json',
      data: {element_id : $(this).data('element-id')},
      success: function (data) {

        $(that).toggleClass('-active', data == "1");

      },
      error: function () {

        $(that).removeClass('-active');
      }
    });


  });


  $('.subscribe-checkboxes input[type=checkbox]').click(function () {

    var that = this;

    var apiUrl = $(this).closest('.subscribe-checkboxes').data('api-url');


    $.ajax({
      url: apiUrl,
      dataType: 'json',
      data: {value : $(this).val()},
      success: function (data) {

        $(that).prop('checked', data == "1");

      },
      error: function () {

        $(that).prop('checked', false);
      }
    });

  });

  var delay;


  delay = $('#face-slider-1').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider1 = new Swiper ('#face-slider-1', {

    slidesPerView: 1,
    //slidesPerGroup: 4,
    //spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-1-next',
      prevEl: '#face-slider-1-prev',
    },

    autoplay: delay,


  });


  delay = $('#face-slider-2').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider2 = new Swiper ('#face-slider-2', {

    slidesPerView: 1,
    //slidesPerGroup: 4,
    //spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-2-next',
      prevEl: '#face-slider-2-prev',
    },

    autoplay: delay,


  });


  delay = $('#face-slider-3').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider3 = new Swiper ('#face-slider-3', {

    slidesPerView: 1,
    //slidesPerGroup: 4,
    //spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-3-next',
      prevEl: '#face-slider-3-prev',
    },

    autoplay: delay,


  });

  delay = $('#face-slider-4').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider4 = new Swiper ('#face-slider-4', {

    slidesPerView: 1,
    //slidesPerGroup: 4,
    //spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-4-next',
      prevEl: '#face-slider-4-prev',
    },

    autoplay: delay,


  });


  delay = $('#face-slider-5').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider5 = new Swiper ('#face-slider-5', {

    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-5-next',
      prevEl: '#face-slider-5-prev',
    },

    autoplay: delay,


  });


  $('.program-table-block select').each(function () {

    $(this).change(function () {

      $.post($(this).data('api-url'), {

        rating : $(this).val(),
        id : $(this).data('element-id'),

      }, function () {


      });

    }).barrating({
      theme: 'fa-stars-gold',
      initialRating: $(this).data('current-rating'),
      allowEmpty: true,
      readonly: !!$(this).data('voted'),
      emptyValue: 0,
    });

  });

  $('.program-table-toggle').click(function (e) {

    if ($(this).text() === 'Свернуть программу') {



      $(this).text('Развернуть программу');

    } else {

      $(this).text('Свернуть программу');
    }

    $(this).parent().parent().next('.program-table-block').slideToggle();

    e.preventDefault();
    return false;

  });



});

