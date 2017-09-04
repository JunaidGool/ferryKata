
var vehiclePassengers = [];
var vehicles = [];
var total_passenger_count = 0;
var total_vehicle_count = 0;

var Vehicle = function(reg,modelName,color,passengers){

  var onBoardVehicle = [{
    registration: reg,
    model:  modelName,
    color: color,
    passengerCount: passengers,
  }];


  var boardStatus = "off_board";

  this.onBoard = function(){
    boardStatus = "on_board";
  };

  this.offBoard = function(){
    boardStatus = "off_board";
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
    total_passenger_count += vehiclePassengers[i]
  };
};

function countVehicles(){
  total_vehicle_count = vehicles.length
};


var vehicle3 = new Vehicle('CA 123', 'BMW', 'Red', 4);
var vehicle1 = new Vehicle('CA 123', 'BMW', 'Red', 5);
var vehicle2 = new Vehicle('CA 456', 'Toyota', 'Blue', 5);
vehicle1.onBoard();
vehicle1.onBoardVehicle();
vehicle2.onBoardVehicle();
vehicle3.onBoardVehicle();
vehicle1.about();

countVehiclePassengers();
countVehicles();

console.log(total_passenger_count);
console.log(total_vehicle_count);
