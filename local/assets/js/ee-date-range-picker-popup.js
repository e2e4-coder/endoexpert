$.fn.eeDateRangePicker = function (options) {

  var $el = this;

  $el.load('/local/assets/html_includes/ee-date-range-picker-popup.html', function () {

    var $datepickerFrom = $el.find('.js-datepicker-from');
    var $datepickerTo = $el.find('.js-datepicker-to');


    $datepickerFrom.datepicker({
      showOtherMonths: true,
      dateFormat: "D, dd.mm.yy",
      onSelect: function (dateText, inst) {

        updateDateControls(inst);


        updateRange($datepickerFrom.datepicker('getDate'), $datepickerTo.datepicker('getDate'));

        $(inst.input).datepicker('refresh');

      },
      beforeShowDay: function (date){


        if (date <= $datepickerTo.datepicker('getDate') && date >= $datepickerFrom.datepicker('getDate')) {

          return [true, 'ui-state-range'];

        }

        return [true];
      }
    });

    $datepickerTo.datepicker({
      showOtherMonths: true,
      dateFormat: "D, dd.mm.yy",
      onSelect: function (dateText, inst) {

        updateDateControls(inst);
        updateRange($datepickerFrom.datepicker('getDate'), $datepickerTo.datepicker('getDate'));

      },
      beforeShowDay: function (date){

        if (date <= $datepickerTo.datepicker('getDate') && date >= $datepickerFrom.datepicker('getDate')) {

          return [true, 'ui-state-range'];

        }

        return [true];
      }
    });

    $datepickerFrom.datepicker("setDate", strToDate(options.dateFrom));
    $datepickerTo.datepicker("setDate", strToDate(options.dateTo));

    updateDateControls($.datepicker._getInst($datepickerFrom[0]));
    updateDateControls($.datepicker._getInst($datepickerTo[0]));

    updateRange(strToDate(options.dateFrom), strToDate(options.dateTo));


    $el.find('.date-from-wrapper .calendar-controls i').click(function () {

      dateIncDec($(this), $el.find('.js-datepicker-from'));

    });

    $el.find('.date-to-wrapper .calendar-controls i').click(function () {

      dateIncDec($(this), $el.find('.js-datepicker-to'));

    });

    $el.find('.js-reset').click(function () {

      $datepickerFrom.datepicker("setDate", strToDate(options.dateFrom));
      $datepickerTo.datepicker("setDate", strToDate(options.dateTo));

      updateDateControls($.datepicker._getInst($datepickerFrom[0]));
      updateDateControls($.datepicker._getInst($datepickerTo[0]));

      updateRange(strToDate(options.dateFrom), strToDate(options.dateTo));


    });

    $el.find('.js-select').click(function () {

      $el.trigger('selected', {
        dateFrom: $el.find('.js-date-from').val(),
        dateTo: $el.find('.js-date-to').val()
      });

      $.magnificPopup.close();

    });


    function strToDate(str) {

      if (str) {
        str = str.split(', ')[1].split('.');

        return new Date(parseInt(str[2]), parseInt(str[1]) - 1, parseInt(str[0]));
      } else {

        return new Date();
      }

    }

    function updateDateControls(inst) {

      var $controls = $(inst.input[0]).prev();

      var $input = $(inst.input[0]).parent().parent().find('.date-input input');

      $input.val($.datepicker.formatDate("D, dd.mm.yy", new Date( inst.currentYear, inst.currentMonth, inst.currentDay )));



      $controls.find('.control-day span').text(inst.currentDay);
      $controls.find('.control-month span').text($.datepicker.formatDate("MM", new Date( inst.currentYear, inst.currentMonth )));
      $controls.find('.control-year span').text(inst.currentYear);


    }

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

    function updateRange(from, to) {

      $el.find('.ui-datepicker-calendar td').each(function () {

        var tdDate = new Date($(this).data('year'), $(this).data('month'), $(this).text());

        if (tdDate.valueOf() >= from.valueOf() && tdDate.valueOf() <= to.valueOf()) {

          $(this).addClass('ui-state-range');
        }




      });

      $datepickerFrom.datepicker('option', 'maxDate', $datepickerTo.datepicker('getDate'));
      $datepickerTo.datepicker('option', 'minDate', $datepickerFrom.datepicker('getDate'));

    }


  });

  return this;

};


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