$(document).ready(function(){    
     $(".facebook").hover(function(){
        $(this).css("height", "75");
        $(this).css("width", "75");
    }, function(){
        $(this).css("height", "55");
        $(this).css("width", "55");
    });
});
$(document).ready(function(){    
     $(".linkedin").hover(function(){
        $(this).css("height", "75");
        $(this).css("width", "75");
    }, function(){
        $(this).css("height", "55");
        $(this).css("width", "55");
    });
});
$(document).ready(function(){    
     $(".github").hover(function(){
        $(this).css("height", "75");
        $(this).css("width", "75");
    }, function(){
        $(this).css("height", "55");
        $(this).css("width", "55");
    });
});
$(document).ready(function(){    
     $(".instagram").hover(function(){
        $(this).css("height", "75");
        $(this).css("width", "75");
    }, function(){
        $(this).css("height", "55");
        $(this).css("width", "55");
    });
});

$(document).ready(function(){  
function loadRepo(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("example").innerHTML += this.responseText + "<br><br>";
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  let repo = JSON.parse(xhttp.responseText);
  document.getElementById("example").innerHTML += repo + " :name: <br><br>";
  document.getElementById("example").innerHTML += repo.owner.html_url + "<br><br>";
  
}

loadRepo("https://api.github.com/users/michael3557/repos",myFunction)
}); //close document ready
/**
$( document ).ready( function() {
  function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      document.getElementById("example").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "https://api.github.com/repos/michael3557/Code#", true);
      // Add the below here
      xhttp.send();
      // Finish your request here
      // Don't forget the callback()
  }

  function loadRepoCallback(gitHubRequest) {
    // Callback function needs to parse the JSON
    // Using the DOM get the element ID from your <ul> in your HTML
    // You will need a forEach to loop through the parsed object
    // Using the DOM create new list elements
    // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
    // Append the new list items to the element you retrieved from HTML
  }
}); //close document ready
**/