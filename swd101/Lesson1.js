function totalPrice(sqEdge, pricePerSqFt) {
return sqEdge * pricePerSqFt;
}
console.log(totalPrice(10, 100));



let day = "20";
let month = "November";
let year = "1975";

let myBirthday = month + " " + day + ", " + year;
console.log(myBirthday);

/**
Not permitted if under the age of 10
Permitted with parent if under the age of 15
Permitted with anyone over 18 if under the age of 18
Permitted to attend alone if 18 or older.
STARTER CODE:
*/

let age = 15;

if(age >= 18){
  console.log("Permitted to attend alone")
}
else if (age < 18) {
  console.log("Permitted with anyone over 18")
}
else if (age < 15) {
  console.log("Permitted with parent")
}
else {
  console.log("Not permitted")
}