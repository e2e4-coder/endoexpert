(function ($) {


  $.fn.ee_calendar = function(opts) {

    var options = {

      onSelect: function (dateText, inst) {}

    };

    $.extend(options, opts);

    var $el = this;

    var tzoffset = (new Date()).getTimezoneOffset() * 60000;

    var holidays = getHolidays();

    var $datepicker = $el.find('.ee-calendar__datepicker');

    var highlightDays = $el.data('highlighted-days');

    $datepicker.datepicker({
      showOtherMonths: true,
      dateFormat: "D, dd.mm.yy",
      onSelect: function (dateText, inst) {

        updateDateControls(inst);

        $(inst.input).datepicker('refresh');

        options.onSelect(dateText, inst);

      },
      beforeShowDay: function (date){

        var classes = '';
        var title = 'Нет мероприятий за этот день';


        var highlightDay = findHighlightDay(new Date(date - tzoffset).toISOString().slice(0, 10), highlightDays);

        if (highlightDay) {

          classes+= 'ui-state-highlighted ui-state-highlighted-' + highlightDay.color;
          title = highlightDay.caption;

        }





        var year = date.getFullYear(), month = date.getMonth(), day = date.getDate();

        // see if the current date should be highlighted
        for (var i=0; i < holidays.length; ++i)
          if (year == holidays[i][0] && month == holidays[i][1] - 1 &&  day == holidays[i][2])
            return [true, classes + ' ui-datepicker-week-end', title];

        return [true, classes, title];
      }
    });

    updateDateControls($.datepicker._getInst($datepicker[0]));


    $el.find('.ee-calendar__controls i').click(function () {

      dateIncDec($(this), $datepicker);

    });





    return $el;

  };


  function updateDateControls(inst) {

    var $controls = $(inst.input[0]).prev();



    $controls.find('.ee-calendar__controls-day span').text(inst.currentDay);
    $controls.find('.ee-calendar__controls-month span').text($.datepicker.formatDate("MM", new Date( inst.currentYear, inst.currentMonth )));
    $controls.find('.ee-calendar__controls-year span').text(inst.currentYear);


  }

  function dateIncDec($element, $datepicker) {

    var date = $datepicker.datepicker("getDate");

    var $parent = $element.parent();

    if ($parent.hasClass('ee-calendar__controls-day')) {

      date.setDate(date.getDate() + ($element.is(':first-child') ? -1 : 1));

    }

    if ($parent.hasClass('ee-calendar__controls-month')) {

      date.setMonth(date.getMonth() + ($element.is(':first-child') ? -1 : 1));

    }

    if ($parent.hasClass('ee-calendar__controls-year')) {

      date.setFullYear(date.getFullYear() + ($element.is(':first-child') ? -1 : 1));

    }


    $datepicker.datepicker("setDate", date);

    updateDateControls($.datepicker._getInst($datepicker[0]));


  }

  function findHighlightDay(day, highlightDays) {

    if (!highlightDays) return false;


    var result = false;


    $.each(highlightDays, function () {



      if (day === this.day) {

        result = this;

        return false;
      }

    });

    return result;

  }


  function getHolidays() {

    var holidays = [
      {
        "Год/Месяц": 1999,
        "Январь": "1,2,3,4,6*,7,9,10,16,17,23,24,30,31",
        "Февраль": "6,7,13,14,20,21,27,28",
        "Март": "6,7,8,13,14,20,21,27,28",
        "Апрель": "3,4,10,11,17,18,24,25,30*",
        "Май": "1,2,3,4,8,9,10,15,16,22,23,29,30",
        "Июнь": "5,6,11*,12,13,14,19,20,26,27",
        "Июль": "3,4,10,11,17,18,24,25,31",
        "Август": "1,7,8,14,15,21,22,28,29",
        "Сентябрь": "4,5,11,12,18,19,25,26",
        "Октябрь": "2,3,9,10,16,17,23,24,30,31",
        "Ноябрь": "6,7,8,13,14,20,21,27,28",
        "Декабрь": "4,5,11,12,13,18,19,25,26,31*",
        "Всего рабочих дней": 251,
        "Всего праздничных и выходных дней": 114,
        "Количество рабочих часов при 40-часовой рабочей неделе": 2004,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1807.2,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1204.8
      },
      {
        "Год/Месяц": 2000,
        "Январь": "1,2,3,4,6*,7,8,9,15,16,22,23,29,30",
        "Февраль": "5,6,12,13,19,20,26,27",
        "Март": "4,5,7*,8,11,12,18,19,25,26",
        "Апрель": "1,2,8,9,15,16,22,23,29,30",
        "Май": "1,2,6,7,8*,9,13,14,20,21,27,28",
        "Июнь": "3,4,10,11,12,17,18,24,25",
        "Июль": "1,2,8,9,15,16,22,23,29,30",
        "Август": "5,6,12,13,19,20,26,27",
        "Сентябрь": "2,3,9,10,16,17,23,24,30",
        "Октябрь": "1,7,8,14,15,21,22,28,29",
        "Ноябрь": "4,5,7,11,12,18,19,25,26",
        "Декабрь": "2,3,9,10,11*,12,16,17,23,24,30,31",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1995,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1800,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1200
      },
      {
        "Год/Месяц": 2001,
        "Январь": "1,2,6,7,8,13,14,20,21,27,28",
        "Февраль": "3,4,10,11,17,18,24,25",
        "Март": "3,4,7*,8,10,11,17,18,24,25,31",
        "Апрель": "1,7,8,14,15,21,22,28,29,30*",
        "Май": "1,2,5,6,8*,9,12,13,19,20,26,27",
        "Июнь": "2,3,9,10,11*,12,16,17,23,24,30",
        "Июль": "1,7,8,14,15,21,22,28,29",
        "Август": "4,5,11,12,18,19,25,26",
        "Сентябрь": "1,2,8,9,15,16,22,23,29,30",
        "Октябрь": "6,7,13,14,20,21,27,28",
        "Ноябрь": "3,4,6*,7,10,11,17,18,24,25",
        "Декабрь": "1,2,8,9,12,15,16,22,23,29,30",
        "Всего рабочих дней": 251,
        "Всего праздничных и выходных дней": 114,
        "Количество рабочих часов при 40-часовой рабочей неделе": 2001,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1807.2,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1204.8
      },
      {
        "Год/Месяц": 2002,
        "Январь": "1,2,5,6,7,12,13,19,20,26,27",
        "Февраль": "2,3,9,10,16,17,22*,23,24,25",
        "Март": "2,3,7*,8,9,10,16,17,23,24,30,31",
        "Апрель": "6,7,13,14,20,21,28,30*",
        "Май": "1,2,3,4,5,8*,9,10,11,12,19,25,26",
        "Июнь": "1,2,8,9,11*,12,15,16,22,23,29,30",
        "Июль": "6,7,13,14,20,21,27,28",
        "Август": "3,4,10,11,17,18,24,25,31",
        "Сентябрь": "1,7,8,14,15,21,22,28,29",
        "Октябрь": "5,6,12,13,19,20,26,27",
        "Ноябрь": "2,3,6*,7,8,9,16,17,23,24,30",
        "Декабрь": "1,7,8,11*,12,13,14,21,22,28,29,31*",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 115,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1992,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1792,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1192
      },
      {
        "Год/Месяц": 2003,
        "Январь": "1,2,3,5*,6,7,11,12,18,19,25,26",
        "Февраль": "1,2,8,9,15,16,22,23,24",
        "Март": "1,2,7*,8,9,10,15,16,22,23,29,30",
        "Апрель": "5,6,12,13,19,20,26,27,30*",
        "Май": "1,2,3,4,8*,9,10,11,17,18,24,25,31",
        "Июнь": "1,7,8,11*,12,13,14,15,22,28,29",
        "Июль": "5,6,12,13,19,20,26,27",
        "Август": "2,3,9,10,16,17,23,24,30,31",
        "Сентябрь": "6,7,13,14,20,21,27,28",
        "Октябрь": "4,5,11,12,18,19,25,26",
        "Ноябрь": "1,2,6*,7,8,9,15,16,22,23,29,30",
        "Декабрь": "6,7,11*,12,13,14,20,21,27,28,31*",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 115,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1992,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1792,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1192
      },
      {
        "Год/Месяц": 2004,
        "Январь": "1,2,3,4,6*,7,10,11,17,18,24,25,31",
        "Февраль": "1,7,8,14,15,21,22,23,28,29",
        "Март": "6,7,8,13,14,20,21,27,28",
        "Апрель": "3,4,10,11,17,18,24,25,30*",
        "Май": "1,2,3,4,8,9,10,15,16,22,23,29,30",
        "Июнь": "5,6,11*,12,13,14,19,20,26,27",
        "Июль": "3,4,10,11,17,18,24,25,31",
        "Август": "1,7,8,14,15,21,22,28,29",
        "Сентябрь": "4,5,11,12,18,19,25,26",
        "Октябрь": "2,3,9,10,16,17,23,24,30,31",
        "Ноябрь": "6,7,8,13,14,20,21,27,28",
        "Декабрь": "4,5,11,12,13,18,19,25,26,31*",
        "Всего рабочих дней": 251,
        "Всего праздничных и выходных дней": 115,
        "Количество рабочих часов при 40-часовой рабочей неделе": 2004,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1803.2,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1200.8
      },
      {
        "Год/Месяц": 2005,
        "Январь": "1,2,3,4,5,6,7,8,9,10,15,16,22,23,29,30",
        "Февраль": "5,6,12,13,19,20,22*,23,26,27",
        "Март": "5*,6,7,8,12,13,19,20,26,27",
        "Апрель": "2,3,9,10,16,17,23,24,30",
        "Май": "1,2,7,8,9,14,15,21,22,28,29",
        "Июнь": "4,5,11,12,13,18,19,25,26",
        "Июль": "2,3,9,10,16,17,23,24,30,31",
        "Август": "6,7,13,14,20,21,27,28",
        "Сентябрь": "3,4,10,11,17,18,24,25",
        "Октябрь": "1,2,8,9,15,16,22,23,29,30",
        "Ноябрь": "3*,4,5,6,12,13,19,20,26,27",
        "Декабрь": "3,4,10,11,17,18,24,25,31",
        "Всего рабочих дней": 248,
        "Всего праздничных и выходных дней": 117,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1981,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1782.6,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1187.4
      },
      {
        "Год/Месяц": 2006,
        "Январь": "1,2,3,4,5,6,7,8,9,14,15,21,22,28,29",
        "Февраль": "4,5,11,12,18,19,22*,23,24,25",
        "Март": "4,5,7*,8,11,12,18,19,25,26",
        "Апрель": "1,2,8,9,15,16,22,23,29,30",
        "Май": "1,6*,7,8,9,13,14,20,21,27,28",
        "Июнь": "3,4,10,11,12,17,18,24,25",
        "Июль": "1,2,8,9,15,16,22,23,29,30",
        "Август": "5,6,12,13,19,20,26,27",
        "Сентябрь": "2,3,9,10,16,17,23,24,30",
        "Октябрь": "1,7,8,14,15,21,22,28,29",
        "Ноябрь": "3*,4,5,6,11,12,18,19,25,26",
        "Декабрь": "2,3,9,10,16,17,23,24,30,31",
        "Всего рабочих дней": 248,
        "Всего праздничных и выходных дней": 117,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1981,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1782.6,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1187.4
      },
      {
        "Год/Месяц": 2007,
        "Январь": "1,2,3,4,5,6,7,8,13,14,20,21,27,28",
        "Февраль": "3,4,10,11,17,18,22*,23,24,25",
        "Март": "3,4,7*,8,10,11,17,18,24,25,31",
        "Апрель": "1,7,8,14,15,21,22,28*,29,30",
        "Май": "1,5,6,8*,9,12,13,19,20,26,27",
        "Июнь": "2,3,9*,10,11,12,16,17,23,24,30",
        "Июль": "1,7,8,14,15,21,22,28,29",
        "Август": "4,5,11,12,18,19,25,26",
        "Сентябрь": "1,2,8,9,15,16,22,23,29,30",
        "Октябрь": "6,7,13,14,20,21,27,28",
        "Ноябрь": "3,4,5,10,11,17,18,24,25",
        "Декабрь": "1,2,8,9,15,16,22,23,29*,30,31",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1986,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1786.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1189.2
      },
      {
        "Год/Месяц": 2008,
        "Январь": "1,2,3,4,5,6,7,8,12,13,19,20,26,27",
        "Февраль": "2,3,9,10,16,17,22*,23,24,25",
        "Март": "1,2,7*,8,9,10,15,16,22,23,29,30",
        "Апрель": "5,6,12,13,19,20,26,27,30*",
        "Май": "1,2,3,8*,9,10,11,17,18,24,25,31",
        "Июнь": "1,8,11*,12,13,14,15,21,22,28,29",
        "Июль": "5,6,12,13,19,20,26,27",
        "Август": "2,3,9,10,16,17,23,24,30,31",
        "Сентябрь": "6,7,13,14,20,21,27,28",
        "Октябрь": "4,5,11,12,18,19,25,26",
        "Ноябрь": "1*,2,3,4,8,9,15,16,22,23,29,30",
        "Декабрь": "6,7,13,14,20,21,27,28,31*",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1993,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1793,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1193
      },
      {
        "Год/Месяц": 2009,
        "Январь": "1,2,3,4,5,6,7,8,9,10,17,18,24,25,31",
        "Февраль": "1,7,8,14,15,21,22,23,28",
        "Март": "1,7,8,9,14,15,21,22,28,29",
        "Апрель": "4,5,11,12,18,19,25,26",
        "Май": "1,2,3,8*,9,10,11,16,17,23,24,30,31",
        "Июнь": "6,7,11*,12,13,14,20,21,27,28",
        "Июль": "4,5,11,12,18,19,25,26",
        "Август": "1,2,8,9,15,16,22,23,29,30",
        "Сентябрь": "5,6,12,13,19,20,26,27",
        "Октябрь": "3,4,10,11,17,18,24,25,31",
        "Ноябрь": "1,3*,4,7,8,14,15,21,22,28,29",
        "Декабрь": "5,6,12,13,19,20,26,27,31*",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1987,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1787.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1190.2
      },
      {
        "Год/Месяц": 2010,
        "Январь": "1,2,3,4,5,6,7,8,9,10,16,17,23,24,30,31",
        "Февраль": "6,7,13,14,20,21,22,23,27*,28",
        "Март": "6,7,8,13,14,20,21,27,28",
        "Апрель": "3,4,10,11,17,18,24,25,30*",
        "Май": "1,2,3,8,9,10,15,16,22,23,29,30",
        "Июнь": "5,6,11*,12,13,14,19,20,26,27",
        "Июль": "3,4,10,11,17,18,24,25,31",
        "Август": "1,7,8,14,15,21,22,28,29",
        "Сентябрь": "4,5,11,12,18,19,25,26",
        "Октябрь": "2,3,9,10,16,17,23,24,30,31",
        "Ноябрь": "3*,4,5,6,7,14,20,21,27,28",
        "Декабрь": "4,5,11,12,18,19,25,26,31*",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1987,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1787.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1190.2
      },
      {
        "Год/Месяц": 2011,
        "Январь": "1,2,3,4,5,6,7,8,9,10,15,16,22,23,29,30",
        "Февраль": "5,6,12,13,19,20,22*,23,26,27",
        "Март": "5*,6,7,8,12,13,19,20,26,27",
        "Апрель": "2,3,9,10,16,17,23,24,30",
        "Май": "1,2,7,8,9,14,15,21,22,28,29",
        "Июнь": "4,5,11,12,13,18,19,25,26",
        "Июль": "2,3,9,10,16,17,23,24,30,31",
        "Август": "6,7,13,14,20,21,27,28",
        "Сентябрь": "3,4,10,11,17,18,24,25",
        "Октябрь": "1,2,8,9,15,16,22,23,29,30",
        "Ноябрь": "3*,4,5,6,12,13,19,20,26,27",
        "Декабрь": "3,4,10,11,17,18,24,25,31",
        "Всего рабочих дней": 248,
        "Всего праздничных и выходных дней": 117,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1981,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1782.6,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1187.4
      },
      {
        "Год/Месяц": 2012,
        "Январь": "1,2,3,4,5,6,7,8,9,14,15,21,22,28,29",
        "Февраль": "4,5,11,12,18,19,22*,23,25,26",
        "Март": "3,4,7*,8,9,10,17,18,24,25,31",
        "Апрель": "1,7,8,14,15,21,22,28*,29,30",
        "Май": "1,6,7,8,9,12*,13,19,20,26,27",
        "Июнь": "2,3,9*,10,11,12,16,17,23,24,30",
        "Июль": "1,7,8,14,15,21,22,28,29",
        "Август": "4,5,11,12,18,19,25,26",
        "Сентябрь": "1,2,8,9,15,16,22,23,29,30",
        "Октябрь": "6,7,13,14,20,21,27,28",
        "Ноябрь": "3,4,5,10,11,17,18,24,25",
        "Декабрь": "1,2,8,9,15,16,22,23,29*,30,31",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 117,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1986,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1786.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1189.2
      },
      {
        "Год/Месяц": 2013,
        "Январь": "1,2,3,4,5,6,7,8,12,13,19,20,26,27",
        "Февраль": "2,3,9,10,16,17,22*,23,24",
        "Март": "2,3,7*,8,9,10,16,17,23,24,30,31",
        "Апрель": "6,7,13,14,20,21,27,28",
        "Май": "1,2,3,4,5,8*,9,10,11,12,18,19,25,26",
        "Июнь": "1,2,8,9,11*,12,15,16,22,23,29,30",
        "Июль": "6,7,13,14,20,21,27,28",
        "Август": "3,4,10,11,17,18,24,25,31",
        "Сентябрь": "1,7,8,14,15,21,22,28,29",
        "Октябрь": "5,6,12,13,19,20,26,27",
        "Ноябрь": "2,3,4,9,10,16,17,23,24,30",
        "Декабрь": "1,7,8,14,15,21,22,28,29,31*",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1970,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1772.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1179.6
      },
      {
        "Год/Месяц": 2014,
        "Январь": "1,2,3,4,5,6,7,8,11,12,18,19,25,26",
        "Февраль": "1,2,8,9,15,16,22,23,24*",
        "Март": "1,2,7*,8,9,10,15,16,22,23,29,30",
        "Апрель": "5,6,12,13,19,20,26,27,30*",
        "Май": "1,2,3,4,8*,9,10,11,17,18,24,25,31",
        "Июнь": "1,7,8,11*,12,13,14,15,21,22,28,29",
        "Июль": "5,6,12,13,19,20,26,27",
        "Август": "2,3,9,10,16,17,23,24,30,31",
        "Сентябрь": "6,7,13,14,20,21,27,28",
        "Октябрь": "4,5,11,12,18,19,25,26",
        "Ноябрь": "1,2,3,4,8,9,15,16,22,23,29,30",
        "Декабрь": "6,7,13,14,20,21,27,28",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1970,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1772.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1179.6
      },
      {
        "Год/Месяц": 2015,
        "Январь": "1,2,3,4,5,6,7,8,9,10,11,17,18,24,25,31",
        "Февраль": "1,7,8,14,15,21,22,23,28",
        "Март": "1,7,8,9,14,15,21,22,28,29",
        "Апрель": "4,5,11,12,18,19,25,26,30*",
        "Май": "1,2,3,4,8*,9,10,11,16,17,23,24,30,31",
        "Июнь": "6,7,11*,12,13,14,20,21,27,28",
        "Июль": "4,5,11,12,18,19,25,26",
        "Август": "1,2,8,9,15,16,22,23,29,30",
        "Сентябрь": "5,6,12,13,19,20,26,27",
        "Октябрь": "3,4,10,11,17,18,24,25,31",
        "Ноябрь": "1,3*,4,7,8,14,15,21,22,28,29",
        "Декабрь": "5,6,12,13,19,20,26,27,31*",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1971,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1773.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1180.6
      },
      {
        "Год/Месяц": 2016,
        "Январь": "1,2,3,4,5,6,7,8,9,10,16,17,23,24,30,31",
        "Февраль": "6,7,13,14,20*,21,22,23,27,28",
        "Март": "5,6,7,8,12,13,19,20,26,27",
        "Апрель": "2,3,9,10,16,17,23,24,30",
        "Май": "1,2,3,7,8,9,14,15,21,22,28,29",
        "Июнь": "4,5,11,12,13,18,19,25,26",
        "Июль": "2,3,9,10,16,17,23,24,30,31",
        "Август": "6,7,13,14,20,21,27,28",
        "Сентябрь": "3,4,10,11,17,18,24,25",
        "Октябрь": "1,2,8,9,15,16,22,23,29,30",
        "Ноябрь": "3*,4,5,6,12,13,19,20,26,27",
        "Декабрь": "3,4,10,11,17,18,24,25,31",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 119,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1974,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1776.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1183.6
      },
      {
        "Год/Месяц": 2017,
        "Январь": "1,2,3,4,5,6,7,8,14,15,21,22,28,29",
        "Февраль": "4,5,11,12,18,19,22*,23,24,25,26",
        "Март": "4,5,7*,8,11,12,18,19,25,26",
        "Апрель": "1,2,8,9,15,16,22,23,29,30",
        "Май": "1,6,7,8,9,13,14,20,21,27,28",
        "Июнь": "3,4,10,11,12,17,18,24,25",
        "Июль": "1,2,8,9,15,16,22,23,29,30",
        "Август": "5,6,12,13,19,20,26,27",
        "Сентябрь": "2,3,9,10,16,17,23,24,30",
        "Октябрь": "1,7,8,14,15,21,22,28,29",
        "Ноябрь": "3*,4,5,6,11,12,18,19,25,26",
        "Декабрь": "2,3,9,10,16,17,23,24,30,31",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1973,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1775.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1182.6
      },
      {
        "Год/Месяц": 2018,
        "Январь": "1,2,3,4,5,6,7,8,13,14,20,21,27,28",
        "Февраль": "3,4,10,11,17,18,22*,23,24,25",
        "Март": "3,4,7*,8,9,10,11,17,18,24,25,31",
        "Апрель": "1,7,8,14,15,21,22,28*,29,30",
        "Май": "1,2,5,6,8*,9,12,13,19,20,26,27",
        "Июнь": "2,3,9*,10,11,12,16,17,23,24,30",
        "Июль": "1,7,8,14,15,21,22,28,29",
        "Август": "4,5,11,12,18,19,25,26",
        "Сентябрь": "1,2,8,9,15,16,22,23,29,30",
        "Октябрь": "6,7,13,14,20,21,27,28",
        "Ноябрь": "3,4,5,10,11,17,18,24,25",
        "Декабрь": "1,2,8,9,15,16,22,23,29*,30,31",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1970,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1772.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1179.6
      },
      {
        "Год/Месяц": 2019,
        "Январь": "1,2,3,4,5,6,7,8,12,13,19,20,26,27",
        "Февраль": "2,3,9,10,16,17,22*,23,24",
        "Март": "2,3,7*,8,9,10,16,17,23,24,30,31",
        "Апрель": "6,7,13,14,20,21,27,28,30*",
        "Май": "1,2,3,4,5,8*,9,10,11,12,18,19,25,26",
        "Июнь": "1,2,8,9,11*,12,15,16,22,23,29,30",
        "Июль": "6,7,13,14,20,21,27,28",
        "Август": "3,4,10,11,17,18,24,25,31",
        "Сентябрь": "1,7,8,14,15,21,22,28,29",
        "Октябрь": "5,6,12,13,19,20,26,27",
        "Ноябрь": "2,3,4,9,10,16,17,23,24,30",
        "Декабрь": "1,7,8,14,15,21,22,28,29,31*",
        "Всего рабочих дней": 247,
        "Всего праздничных и выходных дней": 118,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1970,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1772.4,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1179.6
      },
      {
        "Год/Месяц": 2020,
        "Январь": "1,2,3,4,5,6,7,8,11,12,18,19,25,26",
        "Февраль": "1,2,8,9,15,16,22,23,24+,29",
        "Март": "1,7,8,9+,14,15,21,22,28,29",
        "Апрель": "4,5,11,12,18,19,25,26,30*",
        "Май": "1,2,3,8*,9,10,11+,16,17,23,24,30,31",
        "Июнь": "6,7,11*,12,13,14,20,21,27,28",
        "Июль": "4,5,11,12,18,19,25,26",
        "Август": "1,2,8,9,15,16,22,23,29,30",
        "Сентябрь": "5,6,12,13,19,20,26,27",
        "Октябрь": "3,4,10,11,17,18,24,25,31",
        "Ноябрь": "1,3*,4,7,8,14,15,21,22,28,29",
        "Декабрь": "5,6,12,13,19,20,26,27,31*",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1995,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1795,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1195
      },
      {
        "Год/Месяц": 2021,
        "Январь": "1,2,3,4,5,6,7,8,9,10,16,17,23,24,30,31",
        "Февраль": "6,7,13,14,20,21,22*,23,27,28",
        "Март": "6,7,8*,13,14,20,21,27,28",
        "Апрель": "3,4,10,11,17,18,24,25,30*",
        "Май": "1,2,3+,8,9,10+,15,16,22,23,29,30",
        "Июнь": "5,6,11*,12,13,14+,19,20,26,27",
        "Июль": "3,4,10,11,17,18,24,25,31",
        "Август": "1,7,8,14,15,21,22,28,29",
        "Сентябрь": "4,5,11,12,18,19,25,26",
        "Октябрь": "2,3,9,10,16,17,23,24,30,31",
        "Ноябрь": "3*,4,6,7,13,14,20,21,27,28",
        "Декабрь": "4,5,11,12,18,19,25,26,31*",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1987,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1787.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1190.2
      },
      {
        "Год/Месяц": 2022,
        "Январь": "1,2,3,4,5,6,7,8,9,15,16,22,23,29,30",
        "Февраль": "5,6,12,13,19,20,22*,23,26,27",
        "Март": "5,6,7*,8,12,13,19,20,26,27",
        "Апрель": "2,3,9,10,16,17,23,24,30",
        "Май": "1,2+,7,8,9,14,15,21,22,28,29",
        "Июнь": "4,5,11,12,13+,18,19,25,26",
        "Июль": "2,3,9,10,16,17,23,24,30,31",
        "Август": "6,7,13,14,20,21,27,28",
        "Сентябрь": "3,4,10,11,17,18,24,25",
        "Октябрь": "1,2,8,9,15,16,22,23,29,30",
        "Ноябрь": "3*,4,5,6,12,13,19,20,26,27",
        "Декабрь": "3,4,10,11,17,18,24,25,31",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1989,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1789.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1192.2
      },
      {
        "Год/Месяц": 2023,
        "Январь": "1,2,3,4,5,6,7,8,14,15,21,22,28,29",
        "Февраль": "4,5,11,12,18,19,22*,23,25,26",
        "Март": "4,5,7*,8,11,12,18,19,25,26",
        "Апрель": "1,2,8,9,15,16,22,23,29,30",
        "Май": "1,6,7,8*,9,13,14,20,21,27,28",
        "Июнь": "3,4,10,11,12,17,18,24,25",
        "Июль": "1,2,8,9,15,16,22,23,29,30",
        "Август": "5,6,12,13,19,20,26,27",
        "Сентябрь": "2,3,9,10,16,17,23,24,30",
        "Октябрь": "1,7,8,14,15,21,22,28,29",
        "Ноябрь": "3*,4,5,6+,11,12,18,19,25,26",
        "Декабрь": "2,3,9,10,16,17,23,24,30,31",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1988,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1788.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1191.6
      },
      {
        "Год/Месяц": 2024,
        "Январь": "1,2,3,4,5,6,7,8,13,14,20,21,27,28",
        "Февраль": "3,4,10,11,17,18,22*,23,24,25",
        "Март": "2,3,7*,8,9,10,16,17,23,24,30,31",
        "Апрель": "6,7,13,14,20,21,27,28,30*",
        "Май": "1,4,5,8*,9,11,12,18,19,25,26",
        "Июнь": "1,2,8,9,11*,12,15,16,22,23,29,30",
        "Июль": "6,7,13,14,20,21,27,28",
        "Август": "3,4,10,11,17,18,24,25,31",
        "Сентябрь": "1,7,8,14,15,21,22,28,29",
        "Октябрь": "5,6,12,13,19,20,26,27",
        "Ноябрь": "2,3,4,9,10,16,17,23,24,30",
        "Декабрь": "1,7,8,14,15,21,22,28,29,31*",
        "Всего рабочих дней": 250,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1994,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1794,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1194
      },
      {
        "Год/Месяц": 2025,
        "Январь": "1,2,3,4,5,6,7,8,11,12,18,19,25,26",
        "Февраль": "1,2,8,9,15,16,22,23,24+",
        "Март": "1,2,7*,8,9,10+,15,16,22,23,29,30",
        "Апрель": "5,6,12,13,19,20,26,27,30*",
        "Май": "1,3,4,8*,9,10,11,17,18,24,25,31",
        "Июнь": "1,7,8,11*,12,14,15,21,22,28,29",
        "Июль": "5,6,12,13,19,20,26,27",
        "Август": "2,3,9,10,16,17,23,24,30,31",
        "Сентябрь": "6,7,13,14,20,21,27,28",
        "Октябрь": "4,5,11,12,18,19,25,26",
        "Ноябрь": "1,2,3*,4,8,9,15,16,22,23,29,30",
        "Декабрь": "6,7,13,14,20,21,27,28,31*",
        "Всего рабочих дней": 249,
        "Всего праздничных и выходных дней": 116,
        "Количество рабочих часов при 40-часовой рабочей неделе": 1986,
        "Количество рабочих часов при 36-часовой рабочей неделе": 1786.8,
        "Количество рабочих часов при 24-часовой рабочей неделе": 1189.2
      }
    ];

    var dates = [];

    for (var i=0;i<holidays.length;i++) {

      var obj = holidays[i];



      var counter = 0;

      var year;

      for (var key in obj) {



        if (counter === 0) {

          year = obj[key];

        } else if (counter <= 12) {

          var month = counter;

          var days = obj[key].split(',');

          for (var ii = 0;ii<days.length;ii++) {

            if (days[ii].indexOf('*') > 0) {continue}

            dates.push([year, month, parseInt(days[ii])]);

          }

        }


        counter++;

      }

    }


    return dates;

  }

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


}(jQuery));

