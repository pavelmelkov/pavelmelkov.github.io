$(document).ready(function(){
    // slick slider
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/back.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/forward.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    // open modal window
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation2').fadeIn('slow');
      })

    // close modal window
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation2, #thanks, #order').fadeOut('slow');
     })


     
      
      // Mask
      $('input[name=phone]').mask("+7 (999) 999-99-99");
     // скрол и анимации
      $(window).scroll(function(){
        if ($(this).scrollTop()>1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      })

      $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
         $('html, body').animate({scrollTop: $(_href).offset().top+"px"});
        return false; 
      })

      new WOW().init();

      $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger_active');
        $('#menu').toggleClass('menu__active');
      });

      $(document).on('keydown', function(e) {
        if (e.keyCode == 27)
          $('#consultation2, .overlay').fadeOut();
      });
});
