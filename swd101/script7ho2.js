function clickit(){
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
     document.getElementById("text").innerHTML = this.responseText;
     document.getElementById("foot").style.display = "block";
  }
  }
  xhttp.open("GET", "info.txt", true);
  xhttp.send();
}