$(function(){
  $('#menu-button').click(function() {
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "block");
    $("html,body").css("overflow","hidden");
  });
  $('#menu-cancel').click(function() {
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });
});