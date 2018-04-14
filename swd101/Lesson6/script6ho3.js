$(document).ready(function(){    
     $("#id1").hover(function(){
        $(this).css("height", "200");
        $(this).css("width", "200");
    }, function(){
        $(this).css("height", "150");
        $(this).css("width", "150");
    });
});
$(document).ready(function(){    
    $("#id2").dblclick(function(){
        $(this).css("background-color", "red");
    });
});
$(document).ready(function(){
    $("#id3").keyup(function(){
        $(this).css("background-color", "green");
    });
});
