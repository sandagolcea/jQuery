$(document).ready(function(){
    $('ol').selectable();

    
    $('.menu').accordion({active: false, collapsible: true});
    
    $('.menu').mouseleave(function(){
      $( '.menu' ).accordion( "option", "active", false );
    });
});