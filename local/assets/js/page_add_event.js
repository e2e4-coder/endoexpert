$(document).ready(function () {

  var onDateClick = function() {

    showPopup({src : '#date-picker-popup'});

  };

  var $initDateFrom = $('.ee-date-time-range-picker .js-init-date-from').click(onDateClick);
  var $initDateTo = $('.ee-date-time-range-picker .js-init-date-to').click(onDateClick);


  $('.ee-date-range-picker-popup').eeDateRangePicker({
    dateFrom: $initDateFrom.val(),
    dateTo: $initDateTo.val()
  }).on('selected', function (e, data) {

    $initDateFrom.val(data.dateFrom);
    $initDateTo.val(data.dateTo);

  });

  $('.ee-date-time-range-picker .js-time-from, .ee-date-time-range-picker .js-time-to').mask('99:99');





});