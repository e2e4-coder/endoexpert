$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'iradio_quacol',
    //increaseArea: '20%' // optional
  });

  var $dbTable = $('#users-db-app .db-table');

  $dbTable.find('th input[type=text]').keyup(function () {

    var that = this;
    var colIndex = $(this).closest('th').index();

    $dbTable.find('tbody tr').filter(function () {

      $(this).toggle($(this).find('td').eq(colIndex).text().toLowerCase().indexOf($(that).val().toLowerCase()) > -1);

    });

  });


});