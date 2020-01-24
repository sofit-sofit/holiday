$(function(){


    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    // ---------menu btn---------

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });
    
    // -------------end menu btn----------


  });