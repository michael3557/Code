function idCard(){
    var firstName = "";
    var lastName = "";
    var address = "";
    var fullName = "";
    var age = NaN;
    var phoneNumber = NaN;


    
    firstName = document.getElementById("firstName").value;
        if(firstName === ""){firstName = "FirstN null";} //validate firstName is not blank
    lastName = document.getElementById("lastName").value;
        if(lastName === ""){lastName = "LastN null";}   //validate lastName is not blank
    address = document.getElementById("address").value;
         if(address === ""){address = "Address null";}  //validate address is not blank
    
    fullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
    
    age = parseInt(document.getElementById("age").value);
    
   
    phoneNumber = parseInt(document.getElementById("phoneNumber").value);
       
    
        
    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for(var i = 0;i < numberArray.length;i++){
      if(numberArray[i] <= 100){
        document.getElementById("postAge").innerHTML = " Age: " + age;
      }
      else if (numberArray[i] > 100){
        document.getElementById("postPhoneNumber").innerHTML = " Phone Number: " + phoneNumber;
      }
            else if(i === 0 && isNaN(numberArray[0].NaN) === true){
              //validate age is not blank
                document.getElementById("postAge").innerHTML = " Age: null"; 
            }
            else if(i === 1 && isNaN(numberArray[1].NaN) === true){
              //validate phoneNumber is not blank
                document.getElementById("postPhoneNumber").innerHTML = " Phone Number:  null";
            }
    }
  }
  
  let myButton = document.getElementById("onclick");
  myButton.addEventListener("click", idCard);
  con