$(document).ready(function () {

  var $timer = $('.js-timer');
  var targetDate = new Date($timer.data('date'));
  var seconds = Math.round((targetDate.getTime() - Date.now())/1000);

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  function renderTime() {

    if (seconds > 0) {

      seconds--;

      var tmp = seconds;

      var d = Math.floor(tmp/60/60/24);
      tmp = tmp - d*60*60*24;

      var h = Math.floor(tmp/60/60);
      tmp = tmp - h*60*60;

      var m = Math.floor(tmp/60);
      var s = tmp - m*60;

      d = pad(d, 3);
      h = pad(h, 2);
      m = pad(m, 2);
      s = pad(s, 2);

      $timer.find('.-s1').text(s.charAt(0));
      $timer.find('.-s2').text(s.charAt(1));

      $timer.find('.-m1').text(m.charAt(0));
      $timer.find('.-m2').text(m.charAt(1));

      $timer.find('.-h1').text(h.charAt(0));
      $timer.find('.-h2').text(h.charAt(1));

      $timer.find('.-d1').text(d.charAt(0));
      $timer.find('.-d2').text(d.charAt(1));
      $timer.find('.-d3').text(d.charAt(2));



    }
  }

  renderTime();

  setInterval(renderTime, 1000);

});