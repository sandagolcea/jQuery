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

  // moving mario around depending on key pressed
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
        $('#mario').animate({left:'+=10px'}, 'fast');
        break;
      // Down Arrow Pressed
      case 40:
        $('#mario').animate({top: "+=10px"}, 'fast');
        break;
    }
  });

  // moving the lift up and down wohoo
  var liftUp = true;
  $('#elevator').click(function(){
    if (liftUp) {
      $(this).animate({top: "+=100px"}, 500);
      liftUp = false;
    } else {
      $(this).animate({top: "-=100px"}, 500);
      liftUp = true;
    }
  });

});