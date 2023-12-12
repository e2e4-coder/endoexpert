$(document).ready(function () {

  var $inputs = $('.js-list-calc input');

  $inputs.change(function () {

    calc($(this).closest('.js-list-calc'));

  });

  $('.js-list-calc').each(function () {

    calc($(this))

  });

  $('.js-list-calc .js-reset').click(function () {

    $inputs.prop('checked', false);

    calc($(this).closest('.js-list-calc'));

  });


  function calc($calcEl) {

    var result = 0;

    $calcEl.find('input:checked').each(function () {

      result += parseInt(this.value)

    });

    $calcEl.find('.js-result').text(result);

  }

});