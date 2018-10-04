$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'icheckbox_quacol',
    //increaseArea: '20%' // optional
  });

  $('.endoexpert-popup select').change(function () {

    if ($(this).val() ==='0') {$(this).addClass('-empty')} else {$(this).removeClass('-empty')}

  });






});