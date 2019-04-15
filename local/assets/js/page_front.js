$(document).ready(function () {

  if ($('#page-front').length) {

    var frontPageSliderDelay = $('#front-page-slider').data('autoplay-delay');

    frontPageSliderDelay = frontPageSliderDelay ? {delay: frontPageSliderDelay} : false;

    var frontPageSlider = new Swiper ('#front-page-slider', {

      pagination: {
        el: '#front-page-slider .swiper-pagination',
        clickable: true
      },
      loop: true,
      autoplay: frontPageSliderDelay
    });

    var lastPublicationsSliderDelay = $('#front-page-last-publications-slider').data('autoplay-delay');

    lastPublicationsSliderDelay = lastPublicationsSliderDelay ? {delay: lastPublicationsSliderDelay} : false;

    var lastPublicationsSlider = new Swiper ('#front-page-last-publications-slider', {


      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 14,
      loopedSlides: 4,
      loop: true,
      navigation: {
        nextEl: '#front-page-last-publications-slider-next',
        prevEl: '#front-page-last-publications-slider-prev',
      },

      autoplay: lastPublicationsSliderDelay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });

    var popularSliderDelay = $('#front-page-popular-slider').data('autoplay-delay');

    popularSliderDelay = popularSliderDelay ? {delay: popularSliderDelay} : false;

    var popularSlider = new Swiper ('#front-page-popular-slider', {


      slidesPerView: 4,
      slidesPerGroup: 4,
      loopedSlides: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: '#front-page-popular-slider-next',
        prevEl: '#front-page-popular-slider-prev',
      },

      autoplay: popularSliderDelay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });


    var facebookSliderDelay = $('#front-page-facebook-slider').data('autoplay-delay');

    facebookSliderDelay = facebookSliderDelay ? {delay: facebookSliderDelay} : false;

    var facebookSlider = new Swiper ('#front-page-facebook-slider', {


      slidesPerView: 4,
      slidesPerGroup: 4,
      loopedSlides: 4,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: '#front-page-facebook-slider-next',
        prevEl: '#front-page-facebook-slider-prev',
      },

      autoplay: facebookSliderDelay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });



    var expertsSliderDelay = $('#front-page-experts-slider').data('autoplay-delay');

    expertsSliderDelay = expertsSliderDelay ? {delay: expertsSliderDelay} : false;


    var expertsSlider = new Swiper ('#front-page-experts-slider', {


      slidesPerView: 4,
      slidesPerGroup: 4,
      loopedSlides: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '#front-page-experts-slider-next',
        prevEl: '#front-page-experts-slider-prev',
      },

      autoplay: expertsSliderDelay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 6
        }
      }
    });

    var leadersSliderDelay = $('#front-page-leaders-slider').data('autoplay-delay');

    leadersSliderDelay = leadersSliderDelay ? {delay: leadersSliderDelay} : false;

    var leadersSlider = new Swiper ('#front-page-leaders-slider', {


      slidesPerView: 4,
      slidesPerGroup: 4,
      loopedSlides: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '#front-page-leaders-slider-next',
        prevEl: '#front-page-leaders-slider-prev',
      },

      autoplay: leadersSliderDelay,

      breakpoints: {

        1023: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 20
        }
      }
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


    /////////////////////




    var $bullets = $('#scroll-pagination a');



    $(document).on('scroll', function () {

      var offset = $(document).scrollTop();
      var windowHeight = $(window).height();

      for (var i=$bullets.length;i>=1;i--) {

        if (offset >= $($($bullets).eq(i-1).attr('href')).offset().top) {

          $bullets.removeClass('-active').eq(i-1).addClass('-active');
          break;

        }

      }


    });


    $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });


    $('.expand-text-button-wrapper button').click(function () {

      $(this).parent().hide().prev().slideDown();



    });




  }
});