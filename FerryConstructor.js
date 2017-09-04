var Ferry = function(maxVehicles,minVehicles,passengers,staff,actualVehicles){

  var ferry = {
    maxVehicles: maxVehicles,
    minVehicles: minVehicles,
    maxPassengers: passengers,
    maxStaff: staff,
    actualVehicles: actualVehicles,
  };

  var status = "in-sufficient" ;

  this.sufficientCapacity = function(){
    if(ferry.minVehicles < ferry.actualVehicles && ferry.maxVehicles > ferry.actualVehicles){
      status = "sufficent"
    }
  }

  this.minCapacity = function(){
    if(ferry.minVehicles == ferry.actualVehicles){
        status = "minimum capacity" ;
    }
  };

  this.maxCapacity = function(){
    if(ferry.maxVehicles == ferry.actualVehicles){
        status = "maximum capacity";
    }
  };

  this.overCapacity = function(){
    if(ferry.maxVehicles < ferry.actualVehicles){
      status = "over capacity";
    }
  };

  this.underCapacity = function(){
    if(ferry.minVehicles > ferry.actualVehicles ){
      status = "under capacity";
    }
  };

  this.boardFerry = function(){
    return ferry;
  };

  this.boardStatus = function(){
    return status
  };

  this.about = function(){
    return  "maxVehicles:  " + ferry.maxVehicles +
            "  minVehicles:  " + ferry.minVehicles +
            "  maxPassengers:  " + ferry.maxPassengers +
            "  maxStaff:  " + ferry.maxStaff +
            "  actualVehicles:  " + ferry.actualVehicles +
            "  status:  " + status
  };

};


var ferry1 = new Ferry(25, 5, 100, 10, 15)
ferry1.boardFerry();
ferry1.sufficientCapacity();
ferry1.minCapacity();
ferry1.maxCapacity();
ferry1.overCapacity();
ferry1.underCapacity();
ferry1.boardStatus();
ferry1.about();
// console.log(ferry1.boardStatus());
