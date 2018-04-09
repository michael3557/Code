$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})
$(document).ready(function () {
  $('.toggle').click(function () {
    $('.toggle').toggleClass('active')
  })
})
