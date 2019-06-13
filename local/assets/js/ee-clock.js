$(document).ready(function () {


  var $clocks = $('.ee-clock');

  $clocks.each(function () {

    var $dialLines = $(this).find('.diallines');

    for (var i = 1; i < 60; i++) {
      $(this).append("<div class='diallines' style='transform: rotate("+6 * i+"deg)'></div>");

    }

  });



  function clock() {

    $clocks.each(function () {

      var weekday = new Array(7),
          offset = parseInt($(this).data('timezone-offset')),
          now = new Date(),
          d = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + offset*60000*60),
          h = d.getHours(),
          m = d.getMinutes(),
          s = d.getSeconds(),
          date = d.getDate(),
          month = d.getMonth() + 1,
          year = d.getFullYear(),

          hDeg = h * 30 + m * (360/720),
          mDeg = m * 6 + s * (360/3600),
          sDeg = s * 6,

          hEl = $(this).find('.hour-hand')[0],
          mEl = $(this).find('.minute-hand')[0],
          sEl = $(this).find('.second-hand')[0],
          dateEl = $(this).find('.date')[0],
          dayEl = $(this).find('.day')[0];

      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      var day = weekday[d.getDay()];

      if(month < 9) {
        month = "0" + month;
      }

      hEl.style.transform = "rotate("+hDeg+"deg)";
      mEl.style.transform = "rotate("+mDeg+"deg)";
      sEl.style.transform = "rotate("+sDeg+"deg)";
      dateEl.innerHTML = date+"/"+month+"/"+year;
      dayEl.innerHTML = day;


    });


  }

  setInterval(clock, 100);


});