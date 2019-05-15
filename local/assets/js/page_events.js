$(document).ready(function () {


  $('.ee-event-teaser .ico-favorite2').click(function () {

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


  $('.event-rating select').each(function () {

    $(this).barrating({
      theme: 'fa-stars-gold2',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });


  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());

  });




  ////////////////////////


  var $filtersForm = $('#events-list-filters form');


  var $specWindow = $('.filter-window.-spec');
  var $specWindowToggle = $('.filter-column.-spec .filter-toggle span');

  var specTmpValues = [];

  $specWindowToggle.click(function () {

    if ($(this).hasClass('-active')) {

      specWindowClose();

    } else {

      specWindowOpen();

    }


  });

  $specWindow.find('.button-close').click(specWindowClose);

  $specWindow.find('.window-actions button').click(specWindowApply);

  $specWindow.find('.-select-all').change(function () {

    $specWindow.find('input[type=checkbox]').prop('checked', $(this).prop('checked'));


  });

  function specWindowOpen() {


    closeAll();

    specTmpValues = [];

    $specWindow.find('input:checked').each(function () {

      specTmpValues.push($(this).val());

    });



    $specWindowToggle.addClass('-active');
    $specWindow.show();

  }

  function specWindowClose() {

    $specWindow.find('input[type=checkbox]').prop('checked', false);

    for (var i = 0;i<specTmpValues.length;i++) {

      $specWindow.find('input[value='+specTmpValues[i]+']').prop('checked', true);
    }

    $specWindowToggle.removeClass('-active');
    $specWindow.hide();



  }

  function specWindowApply() {

    //$filtersForm.submit();


  }


  ////////

  var $typeWindow = $('.filter-window.-type');
  var $typeWindowToggle = $('.filter-column.-type .filter-toggle span');

  var typeTmpValues = [];

  $typeWindowToggle.click(function () {

    if ($(this).hasClass('-active')) {

      typeWindowClose();

    } else {

      typeWindowOpen();

    }


  });

  $typeWindow.find('.button-close').click(typeWindowClose);

  $typeWindow.find('.window-actions button').click(typeWindowApply);

  $typeWindow.find('.-select-all').change(function () {

    $typeWindow.find('input[type=checkbox]').prop('checked', $(this).prop('checked'));


  });

  function typeWindowOpen() {


    closeAll();

    typeTmpValues = [];

    $typeWindow.find('input:checked').each(function () {

      typeTmpValues.push($(this).val());

    });



    $typeWindowToggle.addClass('-active');
    $typeWindow.show();

  }

  function typeWindowClose() {

    $typeWindow.find('input[type=checkbox]').prop('checked', false);

    for (var i = 0;i<typeTmpValues.length;i++) {

      $typeWindow.find('input[value='+typeTmpValues[i]+']').prop('checked', true);
    }

    $typeWindowToggle.removeClass('-active');
    $typeWindow.hide();

  }

  function typeWindowApply() {

    //$filtersForm.submit();


  }


  ////////////

  var $geoWindow = $('.filter-window.-geo');
  var $geoWindowToggle = $('.filter-column.-country .filter-toggle span, .filter-column.-region .filter-toggle span, .filter-column.-city .filter-toggle span');
  var $geoList = $geoWindow.find('.geo-select-list');



  $geoWindowToggle.click(function () {

    if ($geoWindow.is(':visible')) {

      geoWindowClose();

    } else {

      geoWindowOpen();

    }


  });
  $geoWindow.find('.button-close').click(geoWindowClose);

  $geoList.on('click', 'button.-del', function () {

    var $rowItem = $(this).parent().parent();

    if ($rowItem.index() > 0) { $rowItem.remove(); }

  });

  $geoList.on('click', 'button.-add', function () {

    var $rowItem = $(this).parent().parent();

    var $newRowItem = $rowItem.clone().appendTo($geoList);

    $newRowItem.find('select').each(function () {

      $(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, '[' + ($newRowItem.index() + 1) + ']'));

    });

    //alert($newRowItem.index());


  });

  $geoList.on('change', 'select.-country', function () {

    var $regionSelect = $(this).parent().parent().find('select.-region');
    var $citySelect = $(this).parent().parent().find('select.-city');

    $.getJSON($geoList.data('regions-api-url'), {id: $(this).val()}, function (data) {

      $citySelect.find('option').not(':first-child').remove();
      $regionSelect.find('option').not(':first-child').remove();

      for (var i=0;i<data.length;i++) {

        $regionSelect.append('<option value="'+data[i].id+'">'+data[i].title+'</option>');

      }

    });



  });

  $geoList.on('change', 'select.-region', function () {

    var $citySelect = $(this).parent().parent().find('select.-city');

    $.getJSON($geoList.data('cities-api-url'), {id: $(this).val()}, function (data) {

      $citySelect.find('option').not(':first-child').remove();

      for (var i=0;i<data.length;i++) {

        $citySelect.append('<option value="'+data[i].id+'">'+data[i].title+'</option>');

      }

    });



  });


  function geoWindowOpen() {

    closeAll();

    $geoList.find('select.-country').eq(0).attr('name', 'country[1]');
    $geoList.find('select.-region').eq(0).attr('name', 'region[1]');
    $geoList.find('select.-city').eq(0).attr('name', 'city[1]');


    $geoList.find('select.-country').eq(0).trigger('change');

    $geoWindowToggle.addClass('-active');
    $geoWindow.show();

  }

  function geoWindowClose() {

    $geoList.find('.list-item').not(':first-child').remove();

    $geoList.find('select').attr('name', '');

    $geoWindowToggle.removeClass('-active');
    $geoWindow.hide();

  }


  ///////////////////////

  var $dateWindow = $('.filter-window.-date');
  var $dateWindowToggle = $('.filter-column.-date .filter-toggle span');

  var $datepickerFrom = $('#datepicker-from');
  var $datepickerTo = $('#datepicker-to');

  var tmpDateFrom = $('#date-from').val();
  var tmpDateTo = $('#date-to').val();

  var initDateFrom;
  var initDateTo;

  function strToDate(str) {

    if (str) {
      str = str.split(', ')[1].split('.');

      return new Date(parseInt(str[2]), parseInt(str[1]) - 1, parseInt(str[0]));
    } else {

      return new Date();
    }

  }

  function dateWindowOpen() {

    closeAll();

    $datepickerFrom.datepicker({
      showOtherMonths: true,
      dateFormat: "D, dd.mm.yy",
      onSelect: function (dateText, inst) {

        updateDateControls(inst);

      }
    });

    $datepickerTo.datepicker({
      showOtherMonths: true,
      dateFormat: "D, dd.mm.yy",
      onSelect: function (dateText, inst) {

        updateDateControls(inst);

      }
    });

    initDateFrom = strToDate($('#date-from').val());



    if ($('#date-to').val()) {

      initDateTo = strToDate($('#date-to').val());

    } else {

      initDateTo = new Date();
      initDateTo.setMonth(initDateTo.getMonth() +1);
    }


    $datepickerFrom.datepicker("setDate", initDateFrom);
    $datepickerTo.datepicker("setDate", initDateTo);

    updateDateControls($.datepicker._getInst($datepickerFrom[0]));
    updateDateControls($.datepicker._getInst($datepickerTo[0]));


    $dateWindowToggle.addClass('-active');
    $dateWindow.show();

  }

  function dateWindowClose() {

    $('#date-from').val(tmpDateFrom);
    $('#date-to').val(tmpDateTo);

    $dateWindowToggle.removeClass('-active');
    $dateWindow.hide();

  }

  $dateWindowToggle.click(function () {

    if ($dateWindow.is(':visible')) {

      dateWindowClose();

    } else {

      dateWindowOpen();

    }


  });
  $dateWindow.find('.button-close').click(dateWindowClose);

  $('.date-from-wrapper .calendar-controls i').click(function () {

    dateIncDec($(this), $('#datepicker-from'));

  });

  $('.date-to-wrapper .calendar-controls i').click(function () {

    dateIncDec($(this), $('#datepicker-to'));

  });

  function dateIncDec($element, $datepicker) {

    var date = $datepicker.datepicker("getDate");

    var $parent = $element.parent();

    if ($parent.hasClass('control-day')) {

      date.setDate(date.getDate() + ($element.is(':first-child') ? -1 : 1));

    }

    if ($parent.hasClass('control-month')) {

      date.setMonth(date.getMonth() + ($element.is(':first-child') ? -1 : 1));

    }

    if ($parent.hasClass('control-year')) {

      date.setFullYear(date.getFullYear() + ($element.is(':first-child') ? -1 : 1));

    }


    $datepicker.datepicker("setDate", date);

    updateDateControls($.datepicker._getInst($datepicker[0]));


  }

  function updateDateControls(inst) {

    var $controls = $(inst.input[0]).prev();

    var $input = $(inst.input[0]).parent().parent().find('.date-input input');

    $input.val($.datepicker.formatDate("D, dd.mm.yy", new Date( inst.currentYear, inst.currentMonth, inst.currentDay )));



    $controls.find('.control-day span').text(inst.currentDay);
    $controls.find('.control-month span').text($.datepicker.formatDate("MM", new Date( inst.currentYear, inst.currentMonth )));
    $controls.find('.control-year span').text(inst.currentYear);


  }

  $('#date-select-reset').click(function () {

    $datepickerFrom.datepicker("setDate", initDateFrom);
    $datepickerTo.datepicker("setDate", initDateTo);

    updateDateControls($.datepicker._getInst($datepickerFrom[0]));
    updateDateControls($.datepicker._getInst($datepickerTo[0]));

  });


  ///////////////////


  function closeAll() {

    specWindowClose();
    geoWindowClose();
    typeWindowClose();
    dateWindowClose();

  }


  $('.filter-toggle span').click(function () {

    if ($(this).hasClass('-active')) {

      $('.filter-items').hide();

    } else {
      $('.filter-items').show();
    }



  });

  $('.filter-window .button-close').click(function () {

    $('.filter-items').show();

  });

  $('.filter-item.-expand-control').click(function () {

    if ($(this).find('.fa-angle-down').length) {

      $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
      $(this).find('span').text('Свернуть');

      $('.filter-item').show();


    } else  {

      $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
      $(this).find('span').text('Все выбранные');

      $('.filter-item').each(function () {

        if ($(this).index() > 2) {

          $(this).hide()

        }

      });

    }

  });


});


( function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define( [ "../widgets/datepicker" ], factory );
  } else {

    // Browser globals
    factory( jQuery.datepicker );
  }
}( function( datepicker ) {

  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
      "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
      "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "" };
  datepicker.setDefaults( datepicker.regional.ru );

  return datepicker.regional.ru;

} ) );