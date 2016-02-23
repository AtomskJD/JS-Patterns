// BASE constructor
function Vehicle( vehicleType ){
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
 }
console.log(new Vehicle());

// new instance
var truck = new Vehicle("truck");
// and decoration
truck.setModel = function ( modelName ) {
  this.model = modelName;
};

truck.setColor = function ( color ) {
  this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

console.log( truck );

// and Vehicle still unaltered
console.log(new Vehicle("car"));
