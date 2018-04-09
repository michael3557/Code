/**
 * Leverage your knowledge of the JavaScript programming language to create a program that checks highSchoolGrade to see if you are in 9, 10, 11 or 12:
 * if 9 assign "Freshman" to the yourGrade variable
 * if 10 assign "Sophomore" to the yourGrade variable
 * if 11 assign "Junior" to the yourGrade variable
 * if 12 assign "Senior" to the yourGrade variable
 * Your default case should assign "Invalid" to yourGrade.
 */
/** Hands-On 1 */

let highSchoolGrade = 11;
let yourGrade;

switch(highSchoolGrade){
  case 9:
    yourGrade = "Freshman";
    break;
  case 10:
    yourGrade = "Sophomore";
    break;
  case 11:
    yourGrade = "Junior";
    break;
  case 12:
    yourGrade = "Senior";
    break;
  default:
  yourGrade = "Invalid";
}

console.log(yourGrade);


/***Hands-On 2 (optional) */

document.addEventListener("mouseover", function(){
  document.getElementById("mouse").innerHTML = "Hello World";
})


/***Hands-On 3 (optional) */