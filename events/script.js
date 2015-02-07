$(document).ready(function(){

  $('.info-tabs').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

  // input box focus:
  $('input').focus(function(){
      $(this).css('outline-color','#FF0000');
  });

  // animate yellow box on pressing any key
  $(document).keydown(function(){
        $('#yellow-box').animate({left:'+=10px'},500);
  });

  $(document).keydown(function(key) {
      switch(parseInt(key.which,10)) {
      // Left arrow key pressed
      case 37:
        $('#mario').animate({left: "-=10px"}, 'fast');
        break;
      // Up Arrow Pressed
      case 38:
        $('#mario').animate({top: "-=10px"}, 'fast');
        break;
      // Right Arrow Pressed
      case 39:
        $('#mario').animate({left:'+=10px'},500);
        break;
      // Down Arrow Pressed
      case 40:
        $('#mario').animate({top: "+=10px"}, 'fast');
        break;
    }
  });

});