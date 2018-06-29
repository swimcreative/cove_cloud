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
      //adaptiveHeight: true,
      wrapAround: false
    });

    $('.images').flickity({
      cellAlign: 'left',
      watchCSS: true,
      autoPlay: 3500,
      wrapAround: true,
      infinate: true,
      //adaptiveHeight: true,
      wrapAround: false
    });
  }

  /* =============================================================================
  cove MENU TOGGLE
  ========================================================================== */

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
        link = $('header li a');

    link.on('click', function(e) {
      e.preventDefault();
      var goto = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(goto).offset().top - height + 2
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
      vidbox.html('<iframe width="560" height="315" src="//www.youtube.com/embed/vGXjuOO7s2s?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').fitVids();
    });

    close.on('click', function(e) {
      e.preventDefault();
      lightbox.slideUp();
      vidbox.html('');
    });

  }


  /* =============================================================================
   HERO PARALAX EFFECTS
   ========================================================================== */

  cove.parallax = function() {

    // vertical parallax
    var threshold = .15;
    var header = $('header').outerHeight();
    var banner = $('#hero').outerHeight();
    var total = header + banner;
    var scrolled = $(window).scrollTop();
    if($(window).scrollTop() < total) {
      $('.ytplayer-container').css('transform', 'translateY(' + (scrolled * threshold) + 'px)');
    }
  }



  /* COVE BG HERO  */


  cove.bgVideo = function() {
  $('.vid-wrapper').YTPlayer({
    fitToBackground: true,
    videoId: 'NXVYxBE1riU',
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





  /* =============================================================================
  INIT
  ========================================================================== */

  $(document).ready(function() {

    cove.carousel();
    //cove.smoothScroll();
    cove.menuToggle();
    cove.fitVids();
    //cove.parallax();
    //cove.menuHighlight();
    cove.bgVideo();

  });

  $(window).scroll(function() {

    //cove.menuHighlight();
    //  cove.parallax();
  });

  $(window).resize(function() {
    //cove.parallax();
    cove.fitVids();

  });

  $(window).on('load', function() {
    //$("iframe").attr('src', $("iframe").attr('src') + '?autoplay=1');
  })




});
// end custom JS
