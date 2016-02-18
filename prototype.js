var myCar = {
  name: "Ford Escort",
  drive: function () {
    console.log("Weeee !!!!");
  },

  panic: function () {
    console.log("HOW IS it STOPH?!");
  }
};

var yourCar = Object.create( myCar );
console.log(yourCar.name);


var vehicle = {
  getModel: function () {
    console.log("The model oa this vehicle is " + this.model);
  }
};

var car = Object.create(vehicle, {
  "id": {
    value: "010101",
    enumerable: true
  },

  "model": {
    value: "Ford",
    enumerable: true
  }
});

car.getModel();


// ----------------------------------------------------- //

var vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },

  getModel: function () {
    console.log("the model is " + this.model);
  }
};


function vehicleF ( model ) {

  function F() {}
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init( model );
  return f;
}

var car = vehicleF("Ford Escort");
car.getModel();


// ----------------------------------------------------------- //
// Final alternative

var beget = (function () {
  function F() {  }

  return function (proto) {
    F.prototype = proto;
    return new F();
  };
})();
