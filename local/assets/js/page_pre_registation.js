$(document).ready(function () {

  $('.add-more-control .control-add').click(function () {

    $('.js-lpu').first().clone().insertAfter($('.js-post').last()).find('.add-more-control, sup').remove();
    $('.js-spec').first().clone().insertAfter($('.js-lpu').last()).find('sup').remove();
    $('.js-post').first().clone().insertAfter($('.js-spec').last()).find('sup').remove();

  });

  $('.pre-reg-form').on('change', '.js-lpu select', function () {

    var count = 0;

    $('.js-lpu select').each(function () {

      if ($(this).val()) {count++}

    });

    $('.add-more-control .control-counter').text('Выбрано: ' + count + ' ' + getNoun(count, 'учреждение', 'учреждения', 'учреждений'));



  });

  $('.js-notify-checkboxes input').not('.js-notify-no').change(function () {

    if ($(this).is(':checked')) {

      $('.js-notify-no').prop('checked', false);

    }
  });

  $('.js-notify-no').change(function () {

    if ($(this).is(':checked')) {

      $('.js-notify-checkboxes input').not('.js-notify-no').prop('checked', false);

    }

  });


  $('.ico-link').click(function () {


    copyToClipboard($(this).data('link') ? $(this).data('link') : window.location.href);


  }).tooltipster({
    animation: 'fade',
    delay: 200,
    theme: 'tooltipster-punk',
    trigger: 'click',
    timer: 2000
  });

});

function getNoun(number, one, two, five) {
  var n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}