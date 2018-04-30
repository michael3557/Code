$(document).ready(function () {
  $(".facebook").hover(function () {
    $(this).css("height", "75");
    $(this).css("width", "75");
  }, function () {
    $(this).css("height", "55");
    $(this).css("width", "55");
  });
});
$(document).ready(function () {
  $(".linkedin").hover(function () {
    $(this).css("height", "75");
    $(this).css("width", "75");
  }, function () {
    $(this).css("height", "55");
    $(this).css("width", "55");
  });
});
$(document).ready(function () {
  $(".github").hover(function () {
    $(this).css("height", "75");
    $(this).css("width", "75");
  }, function () {
    $(this).css("height", "55");
    $(this).css("width", "55");
  });
});
$(document).ready(function () {
  $(".instagram").hover(function () {
    $(this).css("height", "75");
    $(this).css("width", "75");
  }, function () {
    $(this).css("height", "55");
    $(this).css("width", "55");
  });
});


  function loadDoc(url, callback) {
    document.getElementById("repoList").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function myFunction(xhttp) {
    let repo = JSON.parse(xhttp.responseText);

    document.getElementById("repoList").innerHTML += "<h2>Repo List</h2>";
    for (let i = 0; i < repo.length; i++) {

      document.getElementById("repoList").innerHTML += 
      "<li><a href='https://github.com/michael3557/" + repo[i].name + "'> " + repo[i].name + "</a></li>";
    }
    document.getElementById("repoList").innerHTML += "";
  }



