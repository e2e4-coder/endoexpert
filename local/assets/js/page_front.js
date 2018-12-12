$(document).ready(function () {

  if ($('#page-front').length) {

    var frontPageSlider = new Swiper ('#front-page-slider', {

      pagination: {
        el: '#front-page-slider .swiper-pagination',
        clickable: true
      },
      loop: true
    });

    var lastPublicationsSlider = new Swiper ('#front-page-last-publications-slider', {


      slidesPerView: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: '#front-page-last-publications-slider-next',
        prevEl: '#front-page-last-publications-slider-prev',
      },
    });

    var popularSlider = new Swiper ('#front-page-popular-slider', {


      slidesPerView: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: '#front-page-popular-slider-next',
        prevEl: '#front-page-popular-slider-prev',
      },
    });

    var facebookSlider = new Swiper ('#front-page-facebook-slider', {


      slidesPerView: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: '#front-page-facebook-slider-next',
        prevEl: '#front-page-facebook-slider-prev',
      },
    });

    var expertsSlider = new Swiper ('#front-page-experts-slider', {


      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '#front-page-experts-slider-next',
        prevEl: '#front-page-experts-slider-prev',
      },
    });

    var leadersSlider = new Swiper ('#front-page-leaders-slider', {


      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '#front-page-leaders-slider-next',
        prevEl: '#front-page-leaders-slider-prev',
      },
    });



    $("#front-page-events-list").mCustomScrollbar();

    $('#events-speciality-select').change(function () {

      var val = $(this).val();

      var $items = $('#front-page-events-list .list-item');

      if (val) {

        $items.hide().filter('.-spec-'+val).show();

      } else {

        $items.show();

      }


    });


    $('.sections-list .section-card').flip({trigger: 'hover'});

    $('.lk-comments-views-rating .rating select').each(function () {

      $(this).barrating({
        theme: 'small-white-stars',
        initialRating: $(this).data('current-rating'),
        readonly: true,
        allowEmpty: true,
        emptyValue: 0,
      });

    });

  }
});