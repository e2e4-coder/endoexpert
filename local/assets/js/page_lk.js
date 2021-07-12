$(document).ready(function () {

  $('.ee-doctor-teaser .ico-edit').click(function (e) {

    e.preventDefault();


    $(this).parent().addClass('-edit');

    $(this).parent().find('.-edit-hide').hide();
    $(this).parent().find('.-edit-show').show();


  });

  $('.ee-doctor-teaser .ico-cancel').click(function (e) {

    e.preventDefault();

    $(this).parent().removeClass('-edit');

    $(this).parent().find('.-edit-show').hide();
    $(this).parent().find('.-edit-hide').show();


  });


  $('.ee-doctor-teaser .js-price, .ee-doctor-teaser .js-discount').change(function () {


    var price = parseInt($('.ee-doctor-teaser .js-price').val());
    var discount = parseInt($('.ee-doctor-teaser .js-discount').val());

    var oldPrice = Math.round(price / (1 - discount/100));

    $('.ee-doctor-teaser .js-old-price').text(oldPrice + 'р');



  });

  $('.ee-doctor-teaser .js-upload-graph').click(function (e) {

    e.preventDefault();

    $('.ee-doctor-teaser .js-upload-graph-file').trigger('click');

  });

  $('.ee-doctor-teaser .js-upload-graph-file').change(function () {

    $('.ee-doctor-teaser .js-upload-graph').html('<i>' + this.files[0].name + '</i>');

  });


  var delay = $('#banner-slider-1').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  new Swiper ('#banner-slider-1', {

    loop: true,

    autoplay: delay,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '#banner-slider-1-next',
      prevEl: '#banner-slider-1-prev',
    },

  });


  delay = $('#banner-slider-2').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  new Swiper ('#banner-slider-2', {

    loop: true,

    autoplay: delay,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }

  });


  $('.ee-from-redaction__close').click(function () {

    $('.ee-from-redaction').hide();

  });


  $('.ee-fixed-table').ee_fixed_table();


  $('.js-subscribe').change(function () {


    if ($(this).is(':checked')) {

      $(this).closest('.ee-lk-window-v2').find('.js-on').show();
      $(this).closest('.ee-lk-window-v2').find('.js-off').hide();

      $(this).closest('.ee-lk-window-v2').removeClass('disabled');


      // #3f3f41

      //#27a006


    } else {

      $(this).closest('.ee-lk-window-v2').find('.js-on').hide();
      $(this).closest('.ee-lk-window-v2').find('.js-off').show();

      $(this).closest('.ee-lk-window-v2').addClass('disabled');

      //$(this).closest('.ee-lk-window-v2').css('background', '#fb1f02').find('.ee-lk-window-v2__icon').css('background', '#3f3f41');

    }


  });

  $('.js-input-mask-date').mask('99.99.9999');

  $('#lk-menu-toggle').click(function () {

    $('#lk-menu').toggleClass('active');
    $(this).toggleClass('active');

  });


});

