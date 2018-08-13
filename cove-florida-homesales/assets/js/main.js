/**
 * Custom js for theme
 */

jQuery(function($) {

  'use strict';

  var cove = window.strength || {};

  /* =============================================================================
  cove CAROUSEL
  ========================================================================== */

  cove.carousel = function() {
    $('.carousel').flickity({
      cellAlign: 'left',
      autoPlay: 3500,
      wrapAround: true,
      infinate: true,
      groupCells: '100%',
      contain:true,
      //adaptiveHeight: true,
      wrapAround: false,
      prevNextButtons: true,
    });

    $('.carousel-blueprints').flickity({
      cellAlign: 'left',
      autoPlay: 4000,
      wrapAround: true,
      infinate: true,
      groupCells: '100%',
      contain:true,
      imagesLoaded:true,
      //adaptiveHeight: true,
      wrapAround: false,
      prevNextButtons: true,
    });

    $('.carousel-nav').flickity({
      asNavFor: '.carousel-nav',
      draggable:false,
      cellAlign: 'left',
      //autoPlay: 3500,
      wrapAround: true,
      infinate: true,
      groupCells: '100%',
      asNavFor: '.carousel'
    });

    $('.images').flickity({
      cellAlign: 'left',
      watchCSS: true,
      autoPlay: 3500,
      groupCells: '100%',
      wrapAround: true,
      infinate: true,
      //adaptiveHeight: true,
      wrapAround: false
    });

    $('.carousel-nav a').on('click', function(e) {
      e.preventDefault();
      var index = $(this).attr('index');
      $('.carousel').flickity('select', index);
    });
  }

  /* =============================================================================
  cove MENU TOGGLE
  ========================================================================== */


  cove.headPad = function() {

    var height = $('header').height();

    $('main').css('padding-top', height);

  }

  cove.menuToggle = function() {



    var burger = $('.burger'),
        body = $('body, html'),
        nav = $('nav');

    burger.on('click', function(e) {
      e.preventDefault();
      nav.slideToggle(200).toggleClass('opened');
      burger.toggleClass('toggled');
    });

    body.on('click', 'nav.opened li:not(.brand) a', function() {
      nav.slideUp(180).removeClass('opened');
      burger.removeClass('toggled');
    });

    body.on('click', 'nav.opened li:not(.brand) a', function() {
      nav.slideUp(180).removeClass('opened');
      burger.removeClass('toggled');
    });

    body.on('click', function() {
      if(window.innerWidth < 768) {
        nav.slideUp(180).removeClass('opened');
        burger.removeClass('toggled');
      }
    });

    body.on('click', 'header', function(e) {
      e.stopPropagation();
    });

  }

  /* =============================================================================
  cove SMOOTH SCROLL
  ========================================================================== */

  cove.smoothScroll = function() {

    var height = $('header').outerHeight(),
        link = $('a[href*="#"]:not(.burger):not(.item a):not(.gallery a):not(.close):not(.prev):not(.next)');

    link.on('click', function(e) {
      e.preventDefault();
      var goto = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(goto).offset().top + 1
      }, 800, 'easeInOutQuint');
    });
  }

  /* =============================================================================
  cove MENU HIGHLIGHT
  ========================================================================== */

  cove.menuHighlight = function() {

    var mheight = $('header').outerHeight(),
        scrollPos = $(document).scrollTop();

    $('header ul li:not(.brand) a').each(function() {
      var refElement = $(this).attr("href");
      //console.log(refElement);
      if ($(refElement).position().top - mheight <= scrollPos && $(refElement).position().top - mheight + $(refElement).height() > scrollPos) {
        $(this).parent().removeClass("menu_active");
        $(this).parent().addClass("menu_active");
      } else {
        $(this).parent().removeClass("menu_active");
      }
    });
  }


  /* =============================================================================
  cove PARALAX EFFECTS
  ========================================================================== */


  cove.parallax = function() {
    //only run on larger screens
    if ($(window).width() > 480) {
      // selectors
      var elems = $('#hero');
      // vertical parallax
      var scrolled = $(window).scrollTop();
      var width = $(window).width();
      var calc = 50 / width / 2;
      var calc = 50 - calc * scrolled;
      //console.log(calc);
      elems.css('background-position', '75% ' + calc + '%');
    }
  }


  /* =============================================================================
  cove VIDEO + FITVIDS
  ========================================================================== */


  cove.fitVids = function() {

    var vidbox = $(".video-box"),
        lightbox = $('.lightbox'),
        video = $('.video'),
        close = $('.close');

    vidbox.fitVids();

    video.on('click', function(e) {
      e.preventDefault();
      lightbox.slideDown();
      vidbox.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/vGXjuOO7s2s?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').fitVids();
    });

    close.on('click', function(e) {
    //  e.preventDefault();
      //lightbox.fadeOut();
    //  vidbox.html('');
    });

  }



      /* =============================================================================
  HERO PARALAX EFFECTS
  ========================================================================== */


   cove.parallax = function() {
     //only run on larger screens
     if($(window).width() > 480) {
       // selectors
      var elems = $('#hero');
      // vertical parallax
      var scrolled = $(window).scrollTop() * 2;
      var width = $(window).width();
      var calc = 50 / width / 2;
      var calc = 50 - calc * scrolled;
      //console.log(calc);
      elems.css('background-position', '50% '+calc+'%');
    }
   }



  /* COVE BG HERO  */


  cove.bgVideo = function() {
  $('.vid-wrapper').YTPlayer({
    fitToBackground: true,
    videoId: '7-Lgv0pSlV8',
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0,
      //start: 59
    }
  });
  }

// FAQ
  cove.faq = function() {

    var faq = $('#faq');

    faq.find('h5').on('click', function() {
      if($(this).next('p').is(':visible')) {
        $(this).next('p').slideUp(150);
      } else {
      faq.find('.row p').slideUp(150);
        $(this).next('p').slideDown(150);
      }
    });
  }



  cove.shadow = function() {
    var hero = $('#hero').outerHeight();

    if($(window).scrollTop() > hero) {
      $('header').addClass('shadow');
    } else {
      $('header').removeClass('shadow');
    }
  }


 // GALLERY FUNCTION

  cove.gallery = function() {
    var gallery = $('.gallery'),
        lightbox = $('.lightbox');

    gallery.find('a').on('click', function(e) {
      var images = [];
      e.preventDefault();
      $(this).closest('.gallery').find('a').each(function(i) {
          var link = $(this).find('img').attr("src");
          i = i + 1;
          if(i == 1) {
            var conditional = 'class="first-image"';
          } else {
            var conditional = ''
          }
          images.push('<img '+conditional+' index="'+i+'" src="'+link+'"/>');
      });
      lightbox.fadeIn(150);
      var current = $(this).find('img').attr('src');
      lightbox.find('.inner').html(images);
      $('.lightbox img[src="'+current+'"]').addClass('current');
    });

    $('.close').on('click', function(e) {
      e.preventDefault();
      lightbox.fadeOut(150);
      setTimeout(function(){ lightbox.find('.inner').html(''); }, 150)
    });

    var next = $('.next'),
        prev = $('.prev');

        next.on('click', function(e) {
          e.preventDefault();
          var count = lightbox.find('img').length;
          var index = $('.lightbox').find('.current').attr('index');
          ////console.log(count);
          //console.log(index);
          if(count == index) {
          $('.current').removeClass('current');
          $('img[index="1"]').addClass('current');
          } else {
          $('.current').removeClass('current').next('img').addClass('current');
        }
        });

        prev.on('click', function(e) {
          e.preventDefault();
          var count = lightbox.find('img').length;
          var index = $('.current').attr('index');
          console.log(count);
          console.log(index);

          if($('.current').hasClass('first-image')) {
          //$('.current').removeClass('current');
          $('.lightbox img[index="'+count+'"]').addClass('current');
          $('.lightbox img[index="1"]').removeClass('current');

          } else {

          $('.current').removeClass('current').prev('img').addClass('current');
        }
        });
  }






  /* =============================================================================
  INIT
  ========================================================================== */

  $(document).ready(function() {

    cove.carousel();
    cove.smoothScroll();
    cove.menuToggle();
    cove.fitVids();
    cove.faq();
    //cove.parallax();
    //cove.menuHighlight();
    cove.bgVideo();
    //cove.headPad();
    cove.shadow();
    cove.gallery();
    //cove.parallax();

  });

  $(window).scroll(function() {
    //cove.menuHighlight();
    //cove.parallax();
    cove.shadow();
  });

  $(window).resize(function() {
    //cove.parallax();
    cove.fitVids();
    //cove.headPad();
    $('.carousel').flickity('resize');

  });

  $(window).on('load', function() {
    //$("iframe").attr('src', $("iframe").attr('src') + '?autoplay=1');
  })




});
// end custom JS
