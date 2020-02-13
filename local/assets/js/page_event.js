
$(document).ready(function () {

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
  });


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


  delay = $('#expert-review-slider').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var expertReviewSlider = new Swiper ('#expert-review-slider', {

    loop: true,
    navigation: {
      nextEl: '.event-expert-review-block .swiper-button-next',
      prevEl: '.event-expert-review-block .swiper-button-prev',
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


  var $timer = $('.ee-timer');
  var targetDate = new Date($timer.data('date'));
  var seconds = Math.round((targetDate.getTime() - Date.now())/1000);

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  function renderTime() {

    if (seconds > 0) {

      seconds--;

      var tmp = seconds;

      var d = Math.floor(tmp/60/60/24);
      tmp = tmp - d*60*60*24;

      var h = Math.floor(tmp/60/60);
      tmp = tmp - h*60*60;

      var m = Math.floor(tmp/60);
      var s = tmp - m*60;

      d = pad(d, 3);
      h = pad(h, 2);
      m = pad(m, 2);
      s = pad(s, 2);

      $timer.find('.-s1').text(s.charAt(0));
      $timer.find('.-s2').text(s.charAt(1));

      $timer.find('.-m1').text(m.charAt(0));
      $timer.find('.-m2').text(m.charAt(1));

      $timer.find('.-h1').text(h.charAt(0));
      $timer.find('.-h2').text(h.charAt(1));

      $timer.find('.-d1').text(d.charAt(0));
      $timer.find('.-d2').text(d.charAt(1));
      $timer.find('.-d3').text(d.charAt(2));



    }
  }

  renderTime();

  setInterval(renderTime, 1000);





});

