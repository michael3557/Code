
myButton.addEventListener("click", function(){
  document.getElementById("birthday").innerHTML = 
  "Your birthday is: " 
  + document.getElementById("month").value + " "
  + document.getElementById("day").value  + ", "
  + document.getElementById("year").value; 
})