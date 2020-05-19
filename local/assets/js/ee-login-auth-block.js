$(document).ready(function () {


  $('.ee-login-auth-block form').submit(function (e) {

    $(this).find('.-error').removeClass('-error');

    var isErr = false;

    $(this).find('.form-text.-required, .form-select.-required').each(function () {

      if (!$(this).val().trim()) {

        $(this).addClass('-error');
        isErr = true;

      }

    });

    $(this).find('input[type=checkbox]').each(function () {

      if (!$(this).is(':checked')) {

        $(this).parent().addClass('-error');
        isErr = true;

      }

    });


    if (isErr) {

      e.preventDefault();
      return false;

    }


  });



});