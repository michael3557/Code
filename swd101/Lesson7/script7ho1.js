function loadDoc(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("change").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "lesson7ho1.txt", true);
  // Add the below here
  xhttp.send(); 
}
