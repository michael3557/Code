

function phoneNumberFormat(phoneNumber) {
  phoneNumber = document.getElementById("phNumber").value;
  let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;

  phoneNumber.match(phoneRegex) ? alert("Valid number entered") : alert("Phone number entered is invalid");
}