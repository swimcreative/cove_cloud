$(document).ready(function(){
    // Sliders 

    $(".slider1").slick({
        asNavFor: '.slider-captions',
        speed: 200,
        arrows: false
      })
      
      $(".slider-captions").slick({
        asNavFor: '.slider1',
        speed: 200,
        fade: true,
        appendArrows: $('.slider-controls'),
        prevArrow: '<div class="pagination button-left"><img src="assets/images/left-arrow.png"></div>',
        nextArrow: '<div class="pagination button-right"><img src="assets/images/right-arrow.png"></div>'
      })

    $(".slider2").slick({
        speed: 200,
        dots:true,
        appendArrows: $('.slider-controls-2'),
        prevArrow: '<div class="pagination button-left"><img src="assets/images/left-arrow.png"></div>',
        nextArrow: '<div class="pagination button-right"><img src="assets/images/right-arrow.png"></div>'
      })

      $(".slider3").slick({
        speed: 200,
        dots:true,
        appendArrows: $('.slider-controls-3'),
        prevArrow: '<div class="pagination button-left"><img src="assets/images/left-arrow.png"></div>',
        nextArrow: '<div class="pagination button-right"><img src="assets/images/right-arrow.png"></div>'
      })


          
    // Fade in effect 
    $(window).scroll( function(){
        $('.scroll-fade').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},800);
            }
        }); 
    });
});