/**
 * Requirements
Leverage your knowledge of the JavaScript programming language to create three 
subclasses of the Employee parent class given. Each class should inherit from 
Employee as well as contain two methods specific to each subclass.

script.js file:

class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}
Three new subclasses:

Manager
Designer
QA
Starter Code:

class Manager extends Employee {}
Examples of the methods for these subclasses:

jobDescription()
yearsExperience()
degreeCompleted()
 */

class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}
class Manager extends Employee {
  constructor(degrees,yearsAsManager1, name, salary, hireDate){
    super(name, salary, hireDate);
    this.degrees = degrees;
    this.yearsAsManager1 = yearsAsManager1;
  }
  degreeCompleted(){document.getElementById("id").innerHTML += this.name + ' has a degree in ' + this.degrees + ".<br>";}
  yearsAsManager(){document.getElementById("id").innerHTML += this.name + " has been a manager here for " + this.yearsAsManager1 + " years.<br>"}  
}
class Designer extends Employee {
  constructor(jobDescript,yearsOnJob,name, salary, hireDate){
    super(name, salary, hireDate);
    this.jobDescript = jobDescript;
    this.yearsOnJob = yearsOnJob;
  }
  jobDescription(){document.getElementById("id").innerHTML += "What our Designer, " + this.name + " does is " + this.jobDescript + ".<br>"}
  yearsExperience(){document.getElementById("id").innerHTML += this.name + " has been working here for " + this.yearsOnJob + " years.<br>";}
}
class QA extends Employee {
  constructor(jobDescript,yearsOnJob,name, salary, hireDate){
    super(name, salary, hireDate);
    this.jobDescript = jobDescript;
    this.yearsOnJob = yearsOnJob;
  }
  jobDescription(){document.getElementById("id").innerHTML += "What our QA, " + this.name + " does is " + this.jobDescript + ".<br>"}
  yearsExperience(){document.getElementById("id").innerHTML += this.name + " has been working here for " + this.yearsOnJob + " years.<br>";}
}

let man = new Manager("Business Management","4","Sam Smith","99","02-09-2008");
man.degreeCompleted();
man.yearsAsManager();
man.getName();

let designer = new Designer("Make shit up creatively","1","Jane Main","55","01-31-1999")
designer.jobDescription();
designer.yearsExperience();
designer.getHireDate();

let qa1 = new QA("checks for errors in our products","2","Joe Blow","20","10-14-2016");
qa1.jobDescription();
qa1.yearsExperience();
qa1.getSalary();
