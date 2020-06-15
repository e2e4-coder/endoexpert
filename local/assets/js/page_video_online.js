
$(document).ready(function () {

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('a[name=' + $.attr(this, 'href').replace('#', '') + ']').offset().top -70
    }, 500);
  });



});

