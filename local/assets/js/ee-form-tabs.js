$(document).ready(function () {

  if ($(window).width() <= 768) {

    var $tabs = $('.ee-form-tabs');


  $tabs.wrap('<div class="ee-form-tabs-wrapper"></div>');

  $tabs.parent().prepend('<div class="tabs-title">'+$('.ee-form-tabs .-active').text()+'</div>');


  $tabs.mCustomScrollbar({
      theme: "light-thick",
      scrollButtons:{ enable: true }

    });

  }


});