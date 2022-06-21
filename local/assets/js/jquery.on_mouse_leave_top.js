$(document).ready(function () {

  var direction;
  var oldY = 0;

  $('body').on('mousemove', function (e) {

    if (e.pageY < oldY) {
      direction = "up"
    }
    else if (e.pageY > oldY) {
      direction = "down"
    }

    oldY = e.pageY;


    if (e.clientY < 20 && direction === 'up') {


      $(document).trigger('mouseLeaveTop');


    }

  });

});