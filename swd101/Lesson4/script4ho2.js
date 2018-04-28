/***
Leverage your knowledge of the JavaScript programming language to write a 
try...catch statement using the given variable; it should have at least three
try statements such as if (x < 5) throw true;. Your catch should log the error 
to the console.
****/

let newNumber = 10;

try {
  if (newNumber < 10) throw true;
  if (newNumber > 10) throw "Number is greater than 10";
  if (newNumber === 10) throw "X is 10";
}
catch(err){
  alert(err);
}