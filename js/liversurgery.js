$(document).ready(function () {


  var lsSlider = new Swiper ('#ls-slider', {

    pagination: {
      el: '#ls-slider .swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });

  var lsLectorsSlider = new Swiper ('#ls-lectors-slider', {

    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
        nextEl: '#ls-lectors-slider .swiper-button-next',
        prevEl: '#ls-lectors-slider .swiper-button-prev',
    },
  });

  var $lsTimer = $('#ls-timer');

  if ($lsTimer.length) {

    var targetDate = new Date($lsTimer.data('target-date'));

    function updateTimer() {

      var delta = targetDate.getTime() - Date.now();

      var days = Math.floor(delta / 1000 / 60 / 60 / 24);

      delta = delta - days*1000*60*60*24;

      var hours = Math.floor(delta / 1000 / 60 / 60);

      delta = delta - hours*1000*60*60;

      var minutes  = Math.floor(delta / 1000 / 60);


      if (days > 99) days = 99;

      $lsTimer.find('.-d2').text(days.toString().slice(-1));
      $lsTimer.find('.-d1').text(days > 9 ? days.toString().slice(0, -1) : 0);

      $lsTimer.find('.-h2').text(hours.toString().slice(-1));
      $lsTimer.find('.-h1').text(hours.toString().slice(0, -1) ? hours.toString().slice(0, -1) : 0);

      $lsTimer.find('.-m2').text(minutes.toString().slice(-1));
      $lsTimer.find('.-m1').text(minutes.toString().slice(0, -1) ? minutes.toString().slice(0, -1) : 0);




    }

    updateTimer();

    setInterval(updateTimer, 1000*60);














  }





});