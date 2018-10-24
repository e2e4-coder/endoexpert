$(document).ready(function () {


  $('#select-view-button').click(function () {

    $('#select-view-popup').toggle();

  });

  $('#select-view-popup').find('a').click(function () {

    $('#select-view-popup').hide();

  });




});