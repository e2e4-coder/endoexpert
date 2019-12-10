$.fn.ee_button_select = function() {

  var $select = $(this);

  var $control = $('<div class="ee-button-select-control"></div>');

  $select.hide();

  $select.find('option').each(function () {

    $('<span class="option-item'+($(this).is('[selected]') ? ' -selected' : '')+'" data-value="'+$(this).attr('value')+'">'+$(this).text()+'</span>').appendTo($control);

  });

  $control.on('click', '.option-item', function () {

    if (!$(this).hasClass('-selected') && (!$select.val() || $select.val().length < parseInt($select.data('max-values')))) {

      $(this).addClass('-selected');

    } else {

      $(this).removeClass('-selected');

    }

    var arr = [];

    $control.find('.-selected').each(function () {

      arr.push($(this).data('value'));

    });

    $select.val(arr);




  });

  $control.insertAfter($(this));




  return this;
};