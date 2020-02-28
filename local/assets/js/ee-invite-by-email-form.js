$(document).ready(function () {

  $('.js-invite-friends').click(function () {

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
            url: '/local/assets/json/get-one.json',
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