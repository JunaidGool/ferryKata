var Ferry = function(vehicles,passengers, people_count, vehicle_count){

  var loadFerry = {
    maxVehicles: vehicles,
    maxPassengers: passengers,
    actualPassengers: people_count,
    actualVehicles: vehicle_count,
  };

  var maximumVehicles = loadFerry.maxVehicles;
  var maximumPassengers = loadFerry.maxPassengers;

  var vehicleBoardStatus = "rejected";
  var passengerBoardStatus = "accepted"

  this.acceptPassenger = function(){

    if(maximumPassengers > people_count){
      passengerBoardStatus = "passengers accepted";
    }

  }

  this.rejectPassenger = function(){
    if(maximumPassengers < people_count){
      passengerBoardStatus = "passengers rejected"
    }
  }

  this.acceptVehicle = function(){

    if(maximumVehicles > vehicle_count ){
      vehicleBoardStatus = "vehicle accepted";
    }
  };

  this.rejectVehicle = function(){

    if(maximumVehicles < vehicle_count){
      vehicleBoardStatus = "vehicle rejected";
    }
  };

  this.loadFerry = function(){
    return loadFerry;
  };

  this.loadStatus = function(){
    return loadStatus;
  };

  this.aboutFerry = function(){
    return "maxVehicles: " + loadFerry.maxVehicles +
           "  maxPassengers: " + loadFerry.maxPassengers +
           "  actualPassengers:  " + loadFerry.actualPassengers +
           "  actualVehicles:  " + loadFerry.actualVehicles +
           "  vehicleBoardStatus:  " + vehicleBoardStatus +
           "  passengerBoardStatus:  " + passengerBoardStatus
  };
};
