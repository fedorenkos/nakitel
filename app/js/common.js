$(document).ready(function(){

//sliding menu
var touch = $('.menu');
  var ul = $('.top-line');

  $(touch).on('click', function(e){
    e.preventDefault();
    ul.slideToggle();
  });
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 1173 && ul.is(':hidden')){
      ul.removeAttr('style');

    }
  });

//from menu to cross
var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();

//slider

$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    dots: true,
    arrows: false,
  centerPadding: '5px',
  zIndex: -1000,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    }
  ]
});



// $('.invisible_search').click(function(){
//   $('.search').slideToggle('slow');
// });

// $('.cart_top_image').click(function(){
//   $('.items_price').slideToggle();
// });

// $('.phone-call').click(function(){
//   $('.phone').slideToggle();
// });













  });

