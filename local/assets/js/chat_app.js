var chatApp;

function initChatApp() {

  if (chatApp) return;

  chatApp = new Vue({

    el: "#chat-app",
    data: {
      apiUrl : '',
      userId: 0,
      messages : []
    },

    mounted: function () {


      this.apiUrl = this.$el.dataset.apiUrl;
      this.userId = parseInt(this.$el.dataset.userId);

      $('#chat-message-field').autoResize();



      this.loadMessages();

    },

    updated: function() {
      $("#chat-messages-list").mCustomScrollbar({theme: "minimal-dark"}).mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom");
    },

    methods: {

      loadMessages : function () {



        var self = this;

        $.ajax({
          url: this.apiUrl,
          method: 'GET',
          success: function (data) {

            self.messages = data.messages;



          },
          error: function (error) {
            console.log(error);
          }
        });
      },

      sendMessage : function (e) {

        var self = this;

        $.post(this.apiUrl, {message : $('#chat-message-field').val()}, function () {

          $('#chat-message-field').val('');

          self.loadMessages();

        });

       e.preventDefault();
       return false;

      },

      getFormattedDate: function(timestamp) {

        var date = new Date(timestamp*1000);

        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;

        return  day + "." + month + "." + date.getFullYear() + " " +  hour + ":" + min + ":" + sec;

      }

    }

  });


}

function destroyChatApp() {



}