$(document).ready(function () {


  var $el = $('.ee-upload-file-widget');


  $el.on('click', '.file-preview', function () {

    if ($(this).parent().hasClass('-active')) {

      e.preventDefault();
      return false;

    }


    $el.find('input[type=file]').trigger('click');

  }).on('change', 'input[type=file]', function (e) {


    if (checkMime(e.target.files[0], $(this).attr('accept'))) {

      $el.find('.file-name').text(e.target.files[0].name);
      $el.find('.file-size').text('('+humanFilesize(e.target.files[0].size)+')');


      $(this).parent().addClass('-active');

    } else {

      $(this).val('');
      $(this).parent().removeClass('-active');

    }

  }).on('click', '.control-delete', function (e) {

    e.stopPropagation();

    $(this).closest('.file-item').removeClass('-active').find('input[type=file]').val('');

    return false;

  }).on('dragover', '.file-preview', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).addClass('-dragging');

  }).on('dragleave', '.file-preview', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).removeClass('-dragging');

  }).on('drop', '.file-preview', function (e) {

    $(this).prev()[0].files = e.originalEvent.dataTransfer.files;

    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('-dragging');

    $(this).prev().trigger('change');

  }).on('click', '.js-from-computer', function () {

    $(this).closest('.file-item').find('input[type=file]').trigger('click');

  });



  function checkMime(file, accept) {

    accept = accept.split(',');

    return accept.indexOf(file.type) > -1;

  }

  function humanFilesize (bytes, precision) {
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    if (typeof precision === 'undefined') precision = 1;
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
    var number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
  }


});