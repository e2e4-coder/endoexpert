$(document).ready(function () {

  $('.ee-mobile-expandable-block .block-title').click(function () {

    var that = this;

    $(this).toggleClass('-active');
    $(this).next().slideToggle(function () {

      $(that).trigger('updated');

    });

  });

});