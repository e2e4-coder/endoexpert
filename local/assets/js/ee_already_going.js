
var openAGPopup = true;

$(document).ready(function () {

  setTimeout(function () {
    openAGPopup = false;
  }, parseInt($('#ee-ag-popup').data('timeout'))*1000);

  $('body').on('mousemove', function (e) {


    if (openAGPopup && e.clientY < 20) {

      openAGPopup = false;

      showPopup({src:'#ee-ag-popup'});

    }



  });





});