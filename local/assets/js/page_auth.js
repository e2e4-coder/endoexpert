$(document).ready(function () {

  if ($('#page-auth').length) {

    $('#page-auth .i-check-ee').iCheck({
      checkboxClass: 'icheckbox_ee',
      radioClass: 'iradio_ee'
    });


    $('#select-user-status-pics .status-item').click(function () {

      $('#select-user-status-pics .status-item').removeClass('-selected');

      $(this).addClass('-selected');

      $('#select-user-status-pics input[type=hidden]').val($(this).data('value'))

    });




  }
});