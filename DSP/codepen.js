$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})

/*
$(document).ready(function(){
  $('.site-nav').click(function(){
    $('.site-nav').toggleClass('open')
  })
})*/