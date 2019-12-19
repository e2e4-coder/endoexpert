$(document).ready(function () {

  $('.main-slider').each(function () {

    var $swiper = $(this).find('.swiper-container');

    var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

    new Swiper ($swiper, {

      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: $(this).find('.swiper-button-next'),
        prevEl: $(this).find('.swiper-button-prev'),
      },

      autoplay: delay,

    });




  });


  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());

  });

  $('.ee-sections-cards-list .section-card').flip({trigger: 'hover'});

  $(document).on('click', 'a[href^="#"]', function(e) {


    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('a[name=' + $.attr(this, 'href').replace('#', '') + ']').offset().top -100
    }, 500);
  });

});

