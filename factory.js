// my types.js
// a constructor for a new cars

function Car( options ) {
  // set defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand NEW";
  this.color = options.color || "silver";
}

function Truck( options ) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}


// now go to factory
// define sceleton
function VehicleFactory() {}
// define prototypes and tools
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function ( options ) {
  switch (options.vehicleType) {
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }

  return new this.vehicleClass( options );
};


// create instances
// create factory
var carFactory = new VehicleFactory();

// create car
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

console.log( "Is it Car: ", car instanceof Car );
console.log( car );


// create another car - from truck
var movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  state: "better than new",
  color: "red",
  wheelSize: "small"
});
console.log( "Is it Truck: ", movingTruck instanceof Truck );
console.log( movingTruck );



// subclassing
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
  state: "omg..so bad",
  color: "pink",
  wheelSize: "so big"
});

console.log( "Is it Truck: ", myBigTruck instanceof Truck );
console.log( myBigTruck );




// ABSTRACT factory
var abstractVehicleFactory = (function () {
  var types = {};

  return {
    getVehicle: function ( type, customizations ) {
      var Vehicle = types[type];
      return (Vehicle ? new Vehicle(customizations) : null);
    },

    registerVehicle: function ( type, Vehicle ) {
      var proto = Vehicle.prototype;

      // specify registered classes
      if ( proto.drive && proto.breakDown ) {
        types[type] = Vehicle;
      }

      return abstractVehicleFactory;
    }
  };
})();

Car.prototype.drive = true;
Car.prototype.breakDown = true;
abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );

var car1 = abstractVehicleFactory.getVehicle( "car", {
  color: "lime green",
  state: "like new"
});

var truck1 = abstractVehicleFactory.getVehicle( "truck", {
  wheelSize: "medium",
  color: "neon red"
});

console.log(car1);
console.log(truck1);
