$(document).ready(function () {


  var target = document.querySelector('body');



  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {

      if (mutation.addedNodes.length) {

        var $el = $(mutation.addedNodes.item(0));

        if ($el.hasClass('hc-offcanvas-nav')) {

          var $el = $('.header-top .right-buttons-mobile').clone().show().appendTo('.nav-wrapper-0 >.nav-content');

          $('.close-burger').show().on('click', function () {

            $(this).hide();
            Nav.close();

          });
        }
      }

    });
  });

  var config = { attributes: false, childList: true, characterData: false };

  observer.observe(target, config);

  //observer.disconnect();

  var Nav = $('.main-menu').hcOffcanvasNav({
    maxWidth: 1024,
    position: 'right',
    insertClose : false,
    labelBack : 'Назад',


  });

  Nav.on('open', function () {

    $('.close-burger').show();

  });

  //Nav.open();

  $('#btn-mobile-search-toggle').click(function () {

    $('.endoexpert-header .search-block').toggle();



  });




  var $pageWrapper = $('.page-wrapper');

  var $header = $('.endoexpert-header');

  var $bxPanel = $('#bx-panel');

  $(document).on('scroll', function () {

    var offset = $(document).scrollTop();

    if (offset === 0) {
      $header.addClass('-top-visible');
    } else {
      $header.removeClass('-top-visible');
    }

    var panelHeight = $bxPanel.length ? $bxPanel.height() : 10;

    if (offset > panelHeight) {

      $header.addClass('-fixed');

      $pageWrapper.css('padding-top', $header.height() + 10 + 'px')



    } else {

      $header.removeClass('-fixed');
      $pageWrapper.css('padding-top', '0')
    }

  });


  var $fixedBtn = $('#fixed-block .fixed-btn-2');

  if ($fixedBtn.length){

    $fixedBtn.click(function () {

      if ($(this).hasClass('-up')) {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;

      }

      if ($(this).hasClass('-down')) {

        $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
        return false;



      }


      var $swipeBlock = $(this).next();

      var top;

      if ($(this).offset().top - $(window).scrollTop() + $swipeBlock.height() > $(window).height()) {

        top = $(window).height() - ($(this).offset().top - $(window).scrollTop()) - $swipeBlock.height() -120;

      } else {

        top = - parseInt($swipeBlock.height()/2);
      }


      $swipeBlock.css('top', top  + 'px');

      $(this).parent().toggleClass('-active');

      var that = this;

      $fixedBtn.filter(function () {

        if (this !== that) $(this).parent().removeClass('-active');

      });

    });


    $('.i-check-ee').iCheck({
      checkboxClass: 'icheckbox_ee',
      radioClass: 'iradio_ee'
    });


  }



  var footerSponsorsSlider = new Swiper ('#footer-sponsors-slider', {

    navigation: {
      nextEl: '#footer-sponsors-slider-next',
      prevEl: '#footer-sponsors-slider-prev',
    },

    spaceBetween: 20,
    slidesPerView: 'auto'

  });

  var footerPartnersSlider = new Swiper ('#footer-partners-slider', {

    navigation: {
      nextEl: '#footer-partners-slider-next',
      prevEl: '#footer-partners-slider-prev',
    },

    spaceBetween: 20,
    slidesPerView: 'auto'

  });

  var sponsorSliderDelay = $('#sponsors-slider').data('autoplay-delay');

  sponsorSliderDelay = sponsorSliderDelay ? {delay: sponsorSliderDelay} : false;

  var sponsorSlider = new Swiper ('#sponsors-slider', {


    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '#sponsors-slider-next',
      prevEl: '#sponsors-slider-prev',
    },

    autoplay: sponsorSliderDelay,
    lazy: true,
    watchSlidesVisibility: true,


  });


  var partnersSliderDelay = $('#partners-slider').data('autoplay-delay');

  partnersSliderDelay = partnersSliderDelay ? {delay: partnersSliderDelay} : false;

  var partnersSlider = new Swiper ('#partners-slider', {


    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    navigation: {
      nextEl: '#partners-slider-next',
      prevEl: '#partners-slider-prev',
    },

    autoplay: partnersSliderDelay,
    lazy: true,
    watchSlidesVisibility: true,


  });




  var footerMenuSlider = new Swiper ('#footer-menu-slider', {

    navigation: {
      nextEl: '#footer-menu-slider-next',
      prevEl: '#footer-menu-slider-prev',
    },

    spaceBetween: 2,
    slidesPerView: 4,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',

    breakpoints: {

      1023: {
        slidesPerView: 'auto',
        slidesPerColumn: 1,
      }
    }

  });




  $('.ee-sidebar-block .expand-toggle').click(function () {

    $(this).parent().next().slideToggle();

    $(this).parent().parent().toggleClass('-collapsed');

  });

  function toggleEvent() {

    var that = this;

    $(this).toggleClass('-active');

    $.ajax({
      url: $(this).data('api-url'),
      dataType: 'json',
      data: {element_id : $(this).data('element-id')},
      success: function (data) {

        $(that).toggleClass('-active', data == "1");

      },
      error: function () {

        $(that).removeClass('-active');
      }
    });


  }

  $('.js-add-to-favorite').click(toggleEvent);

  $('.js-add-to-learn').click(toggleEvent);

  $('.js-copy-link').click(function () {

      copyToClipboard($(this).data('link') ? $(this).data('link') : window.location.href);

  }).tooltipster({
      animation: 'fade',
      delay: 200,
      theme: 'tooltipster-punk',
      trigger: 'click',
      timer: 2000
  });

  $('.ee-like-dislike-control i').click(function () {

    if ($(this).hasClass('-active')) return false;

    var that = this;

    var delta = $(this).hasClass('-up') ? 1 : -1;

    $(this).addClass('-active').prev().text(parseInt($(this).prev().text())+1);

    $.ajax({
      url: $(this).parent().data('api-url'),
      dataType: 'json',
      data: {element_id : $(this).parent().data('element-id'), delta : delta},
      success: function (data) {

        if (data != "1") {
          $(that).removeClass('-active').prev().text(parseInt($(that).prev().text())-1);
        }

      },
      error: function () {

        $(that).removeClass('-active').prev().text(parseInt($(that).prev().text())-1);
      }
    });







  });

  var $headerWrapper = $('.header-wrapper');

  //var headerOffset = $headerWrapper[0].offsetLeft;
  var headerWidth = $headerWrapper.outerWidth();


  setTimeout(function () {

    $('.main-menu .-has-submenu ul').each(function () {

      if ($(this).outerWidth() + $(this).parent()[0].offsetLeft > headerWidth) {

        $(this).css('left', -($(this).outerWidth() + $(this).parent()[0].offsetLeft - headerWidth));

      }


    });
  }, 1000);


  $('.search-block input').focus(function () {

    $('.search-block button').show();
    $(this).addClass('-focused');


  }).blur(function () {

    var that = this;

    setTimeout(function () {

      $('.search-block button').hide();
      $(that).removeClass('-focused');

    }, 500);


  });


  $('.ee-link-widget .widget-btn').tooltipster({
    trigger : 'click',
    content : 'Cкопировано в буфер'
  }).click(function () {

    var text = $(this).prev().text();

    if (!text.trim()) {

      text = $(this).prev().find('input').val();

    }

    copyToClipboard(text);

  });


  $('.ee-expandable-text .expand-toggle span:last-child').click(function () {

    $(this).parent().prev().slideToggle();

    if ($(this).hasClass('-expanded')) {

      $(this).text($(this).data('expand-text') || 'Развернуть').removeClass('-expanded');

    } else {

      $(this).attr('data-expand-text', $(this).text());

      $(this).text('Свернуть').addClass('-expanded');
    }

  });

  $('.ee-expandable-text-2 .title-toggle').click(function () {

    $(this).next().slideToggle();

    $(this).toggleClass('-expanded');

  });

  $('.ee-expandable-text-3').each(function () {

    var wrapper = $(this).data('height') ? '<div class="hidden-text" style="max-height: '+$(this).data('height')+'px"></div>' : '<div class="hidden-text"></div>';

    $(this).wrapInner(wrapper).append('<span class="expand-toggle">раскрыть</span>');

  }).on('click', '.expand-toggle', function () {

    $(this).text($(this).text() === 'раскрыть' ? 'свернуть' : 'раскрыть');

    $(this).parent().toggleClass('-expanded');

  });

  $('.ee-expandable-text-4 .expand-toggle span').click(function () {

    $(this).parent().prev().slideToggle();
    $(this).toggleClass('-expanded');

  });

  $('.ee-expandable-text-6 .expand-toggle span').click(function () {

    $(this).parent().prev().slideToggle();
    $(this).toggleClass('-expanded');

  });

  $('.ee-expandable-text-5__title').click(function () {

    $(this).next().slideToggle();
    $(this).toggleClass('ee-expandable-text-5__title--active');

  });




  $('.js-rating-select').each(function () {

    $(this).change(function () {

      $.post($(this).data('api-url'), {

        rating : $(this).val(),
        id : $(this).data('publication-id'),

      }, function () {


      });

    }).barrating({
      theme: $(this).data('theme') ? $(this).data('theme') : 'fa-stars-gold',
      initialRating: $(this).data('current-rating'),
      allowEmpty: true,
      readonly: !!$(this).data('voted'),
      emptyValue: 0
    });


  });


  if ($.tooltipster) {
    $('.tooltip').tooltipster({theme: 'tooltipster-shadow'});
  }


  $('.ee-select-user-status-pics .status-item').click(function () {

    $(this).parent().find('.status-item').removeClass('-selected');

    $(this).addClass('-selected');

    $(this).parent().find('input[type=hidden]').val($(this).data('value'))

  });




  var $swiper = $('#viewed-pages-slider');

  var delay  = $swiper.data('autoplay-delay') ? {delay: $swiper.data('autoplay-delay')} : false;

  new Swiper ($swiper, {

    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: $swiper.parent().find('.swiper-button-next'),
      prevEl: $swiper.parent().find('.swiper-button-prev'),
    },
    autoplay: delay,
  });





  $('#fixed-block .random-block .welcome-part .ee-button-7').click(function () {

    $('#fixed-block .random-block .ajax-wrapper').load($('#fixed-block .random-block').data('api-url'), function () {

      $("#fixed-block .random-block .ajax-wrapper").mCustomScrollbar({
        theme: "light-thick",
        scrollButtons:{ enable: true }

      });

      $('#fixed-block .random-block .js-add-to-favorite').click(toggleEvent);

      $('#fixed-block .random-block .js-add-to-learn').click(toggleEvent);

      $('#fixed-block .random-block .js-go-to-learn').attr('href', $(this).find('.article-title a').attr('href'));

    });

    $('#fixed-block .random-block .welcome-part').hide();
    $('#fixed-block .random-block .main-part').fadeIn();

  });

  $('#fixed-block .random-block .js-try-again').click(function () {

    $("#fixed-block .random-block .ajax-wrapper").mCustomScrollbar('destroy').html('');

    $('#fixed-block .random-block .welcome-part .ee-button-7').trigger('click');

  });





  $('.ee-attach-field').each(function () {

    var that = this;

    $(this).find('input[type=file]').change(function () {

      if (this.files.length) {

        $(that).find('.field-file').text(this.files[0].name).css('display', 'inline-block');

        $(that).find('.control-delete').css('display', 'inline-block');

        $(that).find('.field-title').hide();

      }

    });


    $(this).find('.field-title').click(function () {

      $(that).find('input[type=file]').trigger('click');



    });

    $(this).find('.control-delete').click(function () {

      $(this).hide();
      $(that).find('.field-file').hide().text('');
      $(that).find('input[type=file]').val('');
      $(that).find('.field-title').css('display', 'inline-block');


    });

  });


  $('.ee-copy-link-html').click(function () {

    copyFormattedToClipboard('<a target="_blank" style="background-color: inherit;font: inherit;" href="'+window.location.href+'">'+$(this).parent().text().trim()+'</a>');

  });

  $('form').submit(function (e) {

    $(this).find('.form-text.-required, .form-select.-required').each(function () {

      if (!$(this).val().trim()) {

        $(this).addClass('-error');

        e.preventDefault();


      }

    });

    $(this).find('input[type=checkbox].-required').each(function () {



      if (!$(this).is(':checked')) {

        $(this).parent().addClass('-error');

        e.preventDefault();

      }

    });

  });



  if (typeof IMask === 'function') {

    $('.js-phone').each(function () {

      IMask(
          this,
          {
            mask: '+000000000000',

          }
      );

    });

    $('.js-email').each(function () {

      IMask(
          this,
          {
            mask: function (value) {
              if(/^[a-zA-Z0-9_\.-]+$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{1,4}$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{1,4}\.$/.test(value))
                return true;
              if(/^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{1,4}\.[a-zA-Z]{1,4}$/.test(value))
                return true;
              return false;
            },

          }
      );



    });

  }

  if (jQuery().ee_form_file) {

    $('.js-form-file').ee_form_file();
  }








});



function copyToClipboard(str) {

    var el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    var selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }


}

function copyToClipboardWithTooltip(el, str, message) {

  copyToClipboard(str);

  $(el).tooltipster('content', message);
  $(el).tooltipster('open');


}

function copyFormattedToClipboard (html) {
  // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = html

  // Hide element
  // [2]
  container.style.position = 'fixed'
  container.style.pointerEvents = 'none'
  container.style.opacity = 0

  // Detect all style sheets of the page
  var activeSheets = Array.prototype.slice.call(document.styleSheets)
      .filter(function (sheet) {
        return !sheet.disabled
      })

  // Mount the container to the DOM to make `contentWindow` available
  // [3]
  document.body.appendChild(container)

  // Copy to clipboard
  // [4]
  window.getSelection().removeAllRanges()

  var range = document.createRange()
  range.selectNode(container)
  window.getSelection().addRange(range)

  // [5.1]
  document.execCommand('copy')

  // [5.2]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true

  // [5.3]
  document.execCommand('copy')

  // [5.4]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false

  // Remove the container
  // [6]
  document.body.removeChild(container)
}

window.showPopup = function (options) {

    setTimeout(function () {

        $.magnificPopup.open({
            items: {
                src: options.src
            },
            modal: options.modal,
            prependTo: options.prependTo ? options.prependTo : document.body,
            mainClass: options.noBg ? 'no-bg' : '',
            type: 'inline',
            tClose: 'Закрыть (Esc)',
            tLoading: 'Загрузка...',
            callbacks: {

                open: function() {

                    if (options.onOpen) {

                      options.onOpen();

                    }

                    if (options.noBg) {

                        $('html').css('overflow', 'initial');

                    }

                },

            }
        });

    }, options.timeout ? options.timeout*1000 : 0);



};

window.showStickyPopup = function (options) {

   $(options.src).fadeIn();

};

window.hideStickyPopup = function (options) {

    $(options.src).hide();

};

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}