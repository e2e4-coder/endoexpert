$(document).ready(function () {

  var $el = $('.ee-flip-card');


  $el.click(function () {

    $(this).toggleClass('-flipped');

  }).mouseover(function () {

    if (!hasTouch()) $(this).addClass('-hovered');

  }).mouseleave(function () {

    $(this).removeClass('-hovered');

  });



  function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
  }



});