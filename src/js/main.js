$(function(){
  //Подключаем меню
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
  //Функционал меню
  $getOffset = function($obj) {
    $objTop = $($obj).offset();
    $top = $objTop.top;
    return $top;
  };

  $('.menu-home').click(function() {
    $objTopNum = $getOffset('.hero');
    $('body,html').animate({scrollTop:$objTopNum},800);
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });

  $('.menu-about').click(function() {
    $objTopNum = $getOffset('.about');
    $('body,html').animate({scrollTop:$objTopNum},800);
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });

  $('.menu-skills').click(function() {
    $objTopNum = $getOffset('.skills');
    $('body,html').animate({scrollTop:$objTopNum},800);
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });

  $('.menu-portfolio').click(function() {
    $objTopNum = $getOffset('.portfolio');
    $('body,html').animate({scrollTop:$objTopNum},800);
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });

  $('.menu-contacts').click(function() {
    $objTopNum = $getOffset('.footer');
    $('body,html').animate({scrollTop:$objTopNum},800);
    $('.mobile').toggleClass('mobile-active');
    $('.mobile').css("display", "none");
    $("html,body").css("overflow","auto");
  });
  
});