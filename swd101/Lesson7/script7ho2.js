function clickit(){
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
             console.log(this.status);
   if(this.readyState == 4 && this.status == 200){
         console.log(this.status);
     document.getElementById("text").innerHTML = this.responseText;
     document.getElementById("foot").style.display = "block";
  }
  }
  xhttp.open("GET", "info.txt", true);
  xhttp.send();
}