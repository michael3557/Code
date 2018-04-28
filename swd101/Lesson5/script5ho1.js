/**
 * Create Stadium class.
Add the constructor function.
The constructor should contain three properties:
name - Name of the stadium
city - What city is the stadium located in?
capacity - How many fans can fit in the stadium?
Add describeStadium() method.
If the following instance is created and the describeStadium() method is called:

let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);

stadium1.describeStadium(); 
The Mercedes Benz Arena is in Atlanta and holds 70000 fans.
*/

class Stadium {
  constructor(name, city, capacity) {
    this.name = name;
    this.city = city;
    this.capacity = capacity;
  }

  describeStadium() {
    document.getElementById("outPut").innerHTML = "The " + this.name + " is in " + this.city + " and holds " + this.capacity + " fans.";
  }
}

let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);
stadium1.describeStadium(); 