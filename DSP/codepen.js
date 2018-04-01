$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})


window.addEventListener("resize", myFunction);
var last = 0;
var x = 0;
var y = 0;
var z = 0;

function myFunction() {
 
   let txt = window.innerWidth;
   
      if(txt <= 1200 &&  x === 0 ){
       $('.menu-toggle').toggleClass('active', 500);
       $('.site-nav').toggleClass('active', 500);
      x++;
      y = 0
      }
      else if(txt > 1200 && y === 0 ){
          $('.menu-toggle').toggleClass('active', 500);
          $('.site-nav').toggleClass('active', 500);
          y++;
          x = 0;
      }

 document.getElementById("demo").innerHTML = "z: " + z + "  x: " + x + "  y: " + y + "  new: " + txt + "  old: " + last +  "  class: " + document.getElementsByTagName("BODY")[0].className;
 last = txt;
 z++;
}