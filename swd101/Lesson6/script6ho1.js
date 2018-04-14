$(document).ready(function(){    
    $("h1").dblclick(function(){
        $(this).css("color", "Blue");
    });
     $("h1").hover(function(){
        $(this).css("font-size", "25px");
    }, function(){
        $(this).css("font-size", "10px");
});
 });