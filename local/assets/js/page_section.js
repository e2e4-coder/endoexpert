$(document).ready(function () {

  $('.ee-publication-teaser-v2 .rating select').each(function () {

    $(this).barrating({
      theme: 'small-white-stars',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });


  $('.ee-section-title .add-to-favorite').click(function (e) {

    if ($(this).hasClass('-active')) {

      return true;

    }

    $(this).addClass('-active');

    var that = this;

    $.post($(this).data('api-url'), {

      section_id : $(this).data('section-id'),

    }, function (data) {

      if (data !== 1) {$(that).removeClass('-active');}

    });

    e.preventDefault();
    return false;

  });

  $('.ee-publication-teaser .control-add-to-learn').click(function () {

    $(this).addClass('-active');

    var that = this;

    $.post($(this).data('api-url'), {

      element_id : $(this).data('element-id'),

    }, function (data) {

      if (data !== 1) {$(that).removeClass('-active');}

    });

  });


  $('.slider-wrapper-type-1').not('.js-skip').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      slidesPerView: 4,
      slidesPerGroup: 4,
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

  $('.ee-invite-by-email-form form').submit(function (e) {

    e.preventDefault();

    if ($(this).find('.form-text').val().trim()) {

      $.ajax({
        url: '/local/assets/json/get-one.json',
        type: 'post',
        data: $(this).serialize(),
        cache: false,
        success: function(data){

          if (data == 1) {
            $.magnificPopup.open({
              items: {
                src: '#invite-by-email-popup-success'
              },
              type: 'inline',
              tClose: 'Закрыть (Esc)',
              tLoading: 'Загрузка...',

            });
          }

        },
        error: function(){
          alert('error!');
        }
      });

    }


    return false;

  });


  var $anatomicCardsSlider = $('#anatomic-cards-slider');

  new Swiper ($anatomicCardsSlider, {

    slidesPerView: 'auto',
    spaceBetween: 7,

    navigation: {
      nextEl: $anatomicCardsSlider.parent().find('.swiper-button-next'),
      prevEl: $anatomicCardsSlider.parent().find('.swiper-button-prev'),
    }

  });

});