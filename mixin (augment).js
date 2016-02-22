var Car = function ( settings ) {

    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";

};

var Mixin = function () {};

Mixin.prototype = {

    driveForward: function () {
        console.log( "drive forward" );
    },

    driveBackward: function () {
        console.log( "drive backward" );
    },

    driveSideways: function () {
        console.log( "drive sideways" );
    }

};

function augment( receivingClass, givingClass ) {
  // if more two args look at specific method to expand
  if ( arguments[2] ) {
    for (var i = 2; i < arguments.length; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }

  // else take all methods
  else {
    for (var methodName in givingClass.prototype) {
      if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];

      }
    }
  }
}

augment( Car, Mixin, "driveForward", "driveBackward" );
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

myCar.driveForward();
myCar.driveBackward();


augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();
