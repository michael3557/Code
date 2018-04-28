/**
 * Leverage your knowledge of the JavaScript programming language to add two more methods to the Stadium class that will log which sport is mainly played in each instance of the class Stadium, and a method that changes the available seats based on the given attendance for a game.
Create new sportPlayed() method
Create new seatsAvailable() method
The following input given utilizing your class:
script.js file:
let stadium1 = new Stadium(
  "Mercedes Benz Arena",
  "Atlanta",
  70000,
  "Football",
  55000
);
stadium1.describeStadium();
stadium1.sportPlayed();
stadium1.seatsAvailable();
Should produce:
The Mercedes Benz Arena is in Atlanta and holds 70000 fans.
The following sport is mainly played in this stadium: Football
There are 15000 seats still available for tonight's game.
 */


class Stadium {
  constructor(name, city, capacity,sportPlayed,seatsAvailable) {
    this.name = name;
    this.city = city;
    this.capacity = capacity;
    this.sportPlayed1 = sportPlayed;
    this.seatsAvailable1 = seatsAvailable;
  }

  describeStadium() {
    document.getElementById("outPut").innerHTML += "The " + this.name + " is in " + this.city + " and holds " + this.capacity + " fans.";
  }
  sportPlayed(){
    document.getElementById("outPut").innerHTML += "<br>The following sport is mainly played in this stadium: " + this.sportPlayed1;
  }
  seatsAvailable() {
    document.getElementById("outPut").innerHTML += "<br>There are " + this.seatsAvailable1 + " seats still available for tonight's game.";
  }
}


let stadium1 = new Stadium(
  "Mercedes Benz Arena",
  "Atlanta",
  70000,
  "Football",
  55000
);


stadium1.describeStadium();
stadium1.sportPlayed();
stadium1.seatsAvailable();