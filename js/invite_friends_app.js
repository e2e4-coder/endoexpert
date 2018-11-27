var inviteFriendsApp;

function initInviteFiendsApp(onOkCallback) {

  if (inviteFriendsApp) return;

  Vue.component('paginate', VuejsPaginate);

  inviteFriendsApp = new Vue({

    el: "#invite-friends-app",
    data: {
      onOkCallback: onOkCallback,
      topic_id: 0,
      alphabet: ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ч','Ш','Щ','Ы','Э','Ю','Я'],
      raw_items: [],
      text_filter : '',
      letter_filter: '',
      online_filter: false,
      best_friends_filter: false,
      sort_by: 'speciality',
      items_per_page: 10,
      page: 1,
      selected_items: []
    },
    computed : {

      items : function () {

        var items = [];

        for (var i=0;i<this.raw_items.length;i++) {

          if (this.letter_filter && this.raw_items[i].last_name.charAt(0) !== this.letter_filter) continue;

          if (this.text_filter) {

            if (this.raw_items[i].last_name.toLowerCase().indexOf(this.text_filter.toLowerCase()) === -1 && this.raw_items[i].first_name.toLowerCase().indexOf(this.text_filter.toLowerCase()) === -1) continue;

          }

          if (this.online_filter && !this.raw_items[i].online) continue;
          if (this.best_friends_filter && !this.raw_items[i].best_friend) continue;


          items.push(this.raw_items[i]);


        }

        return items;


      },

      selected_fio_list : function() {

        var out = [];

        for (var i=0;i<this.selected_items.length;i++) {

          var item = this.findById(this.selected_items[i]);

          if (item) {

            out.push(item.last_name + ' ' + item.first_name[0] + '.' + item.patronymic[0] + '.');

          }

        }

        return out.join(', ');

      },

      page_items : function () {

        return this.items.slice((this.page-1)*this.items_per_page, (this.page-1)*this.items_per_page + this.items_per_page);
      },

      pages_count : function () {

        return Math.ceil(this.items.length / this.items_per_page);
      }

    },

    mounted: function () {

      this.topic_id = this.$el.dataset.topicId;

      $('.i-check2').iCheck({
        checkboxClass: 'icheckbox_quacol',
        radioClass: 'iradio_quacol',
        //increaseArea: '20%' // optional
      });

      $('#invite-app-set-online-filter').on('ifChecked', function () {
        inviteFriendsApp.$data.online_filter = true;
      }).on('ifUnchecked', function () {
        inviteFriendsApp.$data.online_filter = false;
      });

      $('#invite-app-set-best-friends-filter').on('ifChecked', function () {
        inviteFriendsApp.$data.best_friends_filter = true;
      }).on('ifUnchecked', function () {
        inviteFriendsApp.$data.best_friends_filter = false;
      });


      var self = this;
      $.ajax({
        url: 'json/friends.json',
        method: 'GET',
        success: function (data) {
          self.raw_items = data;



          /*
          for (var i=10;i<40;i++) {
            var tmp = JSON.parse(JSON.stringify(self.raw_items[0]));
            tmp.id = i;
            self.raw_items.push(tmp);

          }
          */

          self.sortItems(self.sort_by);
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    methods : {

      findById : function(id) {

        for (var i=0;i<this.items.length;i++) {

          if (this.items[i].id === id) {

            return this.items[i];
          }

        }

        return false;

      },

      selectPage: function (page) {

        this.page = page;

        return page;

      },

      handleFriendClick: function (id) {

        var index = this.selected_items.indexOf(id);

        if (index === -1) {

          this.selected_items.push(id);

        } else {

          this.selected_items.splice(index, 1);
        }

      },

      handleLetterClick: function (event) {

        this.letter_filter = this.letter_filter === event.target.innerHTML ? '' : event.target.innerHTML;

      },

      sortItems: function(sort_by) {

        this.sort_by = sort_by;
        this.raw_items.sort(this.dynamicSort(sort_by));

      },

      dynamicSort: function (property) {
        var sortOrder = 1;
        if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
        }
        return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
        }
      },

      sendInvitation: function () {

        this.onOkCallback();

      }

    }

  });



}

function destroyInviteFiendsApp() {


}