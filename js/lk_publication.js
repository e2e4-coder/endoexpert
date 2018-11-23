

$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'iradio_quacol',
    //increaseArea: '20%' // optional
  });

  $('.lk-comments-views-rating .rating select').each(function () {

    $(this).barrating({
      theme: 'small-white-stars',
      initialRating: $(this).data('current-rating'),
      readonly: true,
      allowEmpty: true,
      emptyValue: 0,
    });

  });

  $('#publication-rating-select').change(function () {

    $.post('json/post-rating.json', {

      rating : $(this).val(),
      id : $(this).data('publication-id'),

    }, function () {


    });

  }).barrating({
    theme: 'fa-stars',
    initialRating: $('#publication-rating-select').data('current-rating'),
    allowEmpty: true,
    emptyValue: 0,
  });



  $('#publication-subscribe-topic').on('ifChanged', function (event) {

    $.post('json/get-one.json', {
      action : $(event.target).is(':checked') ? 'subscribe' : 'unsubscribe',
      topic_id : $(event.target).data('topic-id')
    }).done(function (data) {

      if (!data) {$(event.target).iCheck('uncheck');}

    }).fail(function(xhr, status, error) {
      $(event.target).iCheck('uncheck');
    });
  });

  $('#publication-subscribe-author').on('ifChanged', function (event) {

    $.post('json/get-one.json', {
      action : $(event.target).is(':checked') ? 'subscribe' : 'unsubscribe',
      topic_id : $(event.target).data('author-id')
    }).done(function (data) {

      if (!data) {$(event.target).iCheck('uncheck');}

    }).fail(function(xhr, status, error) {
      $(event.target).iCheck('uncheck');
    });
  });


  $('.endoexpert-poll').flip({
    trigger: 'manual'
  }).each(function () {

    $(this).find('.poll-results').height($(this).find('.poll-question').height())

  });

  $('.flip-toggle').click(function (e) {

    $('.endoexpert-poll').flip('toggle');

    e.preventDefault();
    return false;

  });

  $('#invite-friends-button').click(function () {

    $.magnificPopup.open({
      items: {
        src: '#invite-friends-popup'
      },
      modal: true,
      type: 'inline',
      tClose: 'Закрыть (Esc)',
      tLoading: 'Загрузка...',
      callbacks: {
        open: initInviteFiendsApp(function () {

          $.ajax({
            url: 'json/get-one.json',
            type: 'post',
            data: {topic_id: inviteFriendsApp.topic_id, friends : inviteFriendsApp.selected_items},
            cache: false,
            success: function(){
              $.magnificPopup.close();
              $.magnificPopup.open({
                items: {
                  src: '#invite-friends-popup-success'
                },
                type: 'inline',
                tClose: 'Закрыть (Esc)',
                tLoading: 'Загрузка...',

              });
            },
            error: function(){
              alert('error!');
            }
          });

        }),
        close: destroyInviteFiendsApp
      }
    });

  });



});
