
myButton.addEventListener("click", function(){
  let msg = ""; 
  let firstName = document.getElementById("firstName").value; 
  let lastName = document.getElementById("lastName").value;  
  let ss = document.getElementById("ss").value; 
  /********* Real Names can have a space or hiphen  */
  /****  https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/  ****/
  let fistNameRegex = /^[A-Z][a-zA-Z]+(( |'|\-)[a-zA-Z]+)?$/;
  let lastNameRegex = /^[A-Z][a-zA-Z]+(( |'|\-)[a-zA-Z]+)?$/;
  let ssRegex =  /^\d{3}-\d{3}-\d{4}$/;
  
  msg += firstName.match(fistNameRegex) ? "<div style='color:green;'>First Name is Valid</div>" 
  : "<div style='color:red;'>Invalid Fist Name</div>";
  msg += lastName.match(lastNameRegex) ? "<div style='color:green;'>Last Name is Valid</div>" : "<div style='color:red;'>Invalid Last Name</div>";
  msg += ss.match(ssRegex) ? "<div style='color:green;'>Social Security Valid</div>" : "<div style='color:red;'>Invalid Social Security</div>";
  document.getElementById("results").innerHTML = msg;
})


