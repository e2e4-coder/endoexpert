$(document).ready(function () {

  $('.ee-publication-teaser-v2 .rating select').each(function () {

    $(this).barrating({
      theme: 'small-white-stars',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });


  $('.ee-section-title .add-to-favorite').click(function (e) {

    if ($(this).hasClass('-active')) {

      return true;

    }

    $(this).addClass('-active');

    var that = this;

    $.post($(this).data('api-url'), {

      section_id : $(this).data('section-id'),

    }, function (data) {

      if (data !== 1) {$(that).removeClass('-active');}

    });

    e.preventDefault();
    return false;

  });

  $('.ee-publication-teaser .control-add-to-learn').click(function () {

    $(this).addClass('-active');

    var that = this;

    $.post($(this).data('api-url'), {

      element_id : $(this).data('element-id'),

    }, function (data) {

      if (data !== 1) {$(that).removeClass('-active');}

    });

  });

});