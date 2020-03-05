
var openAGPopup = true;

$(document).ready(function () {

  if (!$('#ee-ag-popup').length) return;

  setTimeout(function () {
    openAGPopup = false;
  }, parseInt($('#ee-ag-popup').data('timeout'))*1000);

  var direction;
  var oldY = 0;

  $('body').on('mousemove', function (e) {


    if (openAGPopup) {
      if (e.pageY < oldY) {
        direction = "up"
      } else if (e.pageY > oldY) {
        direction = "down"
      }

      oldY = e.pageY;
    }

    if (openAGPopup && e.clientY < 20 && direction === 'up') {

      openAGPopup = false;

      showPopup({src:'#ee-ag-popup'});

    }



  });





});