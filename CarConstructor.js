
var vehiclePassengers = [];
var vehicles = [];
var people_count = 0;
var vehicle_count = 0;

var Vehicle = function(reg,modelName,color,passengers){

  var onBoardVehicle = [{
    registration: reg,
    model:  modelName,
    color: color,
    passengerCount: passengers,
  }];


  var boardStatus = "rejected";

  this.onBoard = function(){
    boardStatus = "accepted";
  };

  this.offBoard = function(){
    boardStatus = "rejected";
  };

  this.onBoardVehicle = function(){
    var people_count = 0;
    for(var i = 0; i < onBoardVehicle.length; i++){
      vehiclePassengers.push(onBoardVehicle[i].passengerCount);
      vehicles.push(onBoardVehicle[i].registration)

      }
    return onBoardVehicle;
  };

  this.boardStatus = function(){

    return boardStatus;
  };

  this.about = function(){
    return "Registration:  " + onBoardVehicle.registration +
           "  Model:  " + onBoardVehicle.model +
           "  Color:  " + onBoardVehicle.color +
           "  PassengerCount :  " + onBoardVehicle.passengerCount +
           "  boardStatus:  " + boardStatus
  };

};

function countVehiclePassengers(){
  for(i = 0; i < vehiclePassengers.length; i++ ){
    people_count += vehiclePassengers[i]
  };
};

function countVehicles(){
  vehicle_count = vehicles.length
};

var vehicle4 = new Vehicle('CA 123', 'BMW', 'Red', 250);
var vehicle3 = new Vehicle('CA 123', 'BMW', 'Red', 4);
var vehicle1 = new Vehicle('CA 123', 'BMW', 'Red', 5);
var vehicle2 = new Vehicle('CA 456', 'Toyota', 'Blue', 5);
vehicle1.onBoard();
vehicle1.onBoardVehicle();
vehicle2.onBoardVehicle();
vehicle3.onBoardVehicle();
vehicle4.onBoardVehicle();
vehicle1.about();

countVehiclePassengers();
countVehicles();

console.log(people_count);
console.log(vehicle_count);

var ferry1 = new Ferry(25,100, people_count, vehicle_count);

ferry1.acceptPassenger();
ferry1.rejectPassenger();
ferry1.acceptVehicle();
ferry1.rejectVehicle();
ferry1.loadFerry();
ferry1.aboutFerry();

console.log(ferry1.aboutFerry());
