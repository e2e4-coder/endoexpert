
$(document).ready(function () {


  $('.char-counter').charCounter();

  $('.js-ee-light-box').ee_lightbox({
    withRate: true
  });

  var $card = $('.ee-quiz-card');

  $('.ee-quiz-list').on('click', '.ee-quiz-list__item a', function (e) {

    e.preventDefault();

    var $data = $(this).parent().find('.js-data');

    $card.find('.ee-quiz-card__col-1 img').attr('src', $(this).find('img').attr('src'));

    $card.find('.ee-quiz-card__question span').text($data.find('.js-question').text());
    $card.find('.ee-quiz-card__author span').text($data.find('.js-author').text());
    $card.find('.ee-expandable-text-5__text').hide().html($data.find('.js-text').html());
    $card.find('.ee-expandable-text-5__title').removeClass('ee-expandable-text-5__title--active');

    $card.find('.js-add-to-learn').attr('data-element-id', $data.data('id'));


    $([document.documentElement, document.body]).animate({
      scrollTop: $card.offset().top
    }, 500);


  });


});

