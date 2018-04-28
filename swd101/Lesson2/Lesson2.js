/** Hands-on 1 */

/*Function 1: This function should return the sum of all numbers.
  Function 2: This function should return the quotient of all numbers.
  Function 3: This function should return the average of all numbers. */ 

function sumOfAllNumbers (num1, num2 = 15)  {
  return num1 + num2;
}
sumOfAllNumbers(4,9);

function quotientOfAllNumbers (num1,num2 = 2) {
  return num1 / num2; 
}
quotientOfAllNumbers(10,5);

function averageOfAllNumbers (num1,num2 = 22) {
  return (num1 + num2)/2;
}
averageOfAllNumbers(17,9);

/** Hands-on 2 */

const sumOfAllNumbers2 = (num1, num2 = 15) => num1 + num2;
const  quotientOfAllNumbers2 = (num1,num2 = 2) => num1 / num2;
const  averageOfAllNumbers2 = (num1,num2 = 22) => (num1 + num2)/2;

/** Hands-on 3 */


let newProduct = {
  product: "new pencil",
  cost: 9200000,
  unitSales: 9,
  grossSales: function() {
    console.log(this.product + "= Gross Sales of: " + num.toString(this.cost * this.unitSales));
  }
}


let wishList = {
  ride: "Electric Sports Car",
  laptop: "Intel iCore 11 Extreme",
  wieght: 220,
    reality: function() {
      console.log(this.ride + " Too expensive, " + this.laptop + " doesn't exist yet, " 
      + num.toString(this.wieght) + " in your dreams.");
    }
  }