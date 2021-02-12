var car = "Mustang";
var speed = 55;

function go(car){
    if (speed === 55) {
     console.log("Driving");
    } else {
        console.log("speeding")
    }
}
var speed = 65;
 return go();

 class Car {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
  }
  
  var car1 = new Car(
    "Audi",
    "Q5",
    "2021"
  );
  
  var speed = 55;
  
  function pickCar() {
    console.log("I would like to pick a this car")
    console.log(car1);
  }
  pickCar(Car);
  
  function go(){
      if (speed === 55) {
       console.log("Driving");
      } else {
          console.log("speeding");
      }
  }
  
  var speed = 65;
   return go();

   