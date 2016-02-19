(function () {
  var carManager = {
    // request info
    requestInfo: function ( model, id ) {
      return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function ( model, id ) {
      return "You have successefully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function ( model, id ) {
      return "You have successefully booked a viewing of " + model + " ( " + id +" )";
    }
  };

  carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1));
  };

  console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523"));
  console.log(carManager.execute( "requestInfo", "Ford Mondeo", "54323"));
  console.log(carManager.execute( "requestInfo", "Ford Escort", "34232"));
  console.log(carManager.execute( "buyVehicle", "Ford Escort", "34232"));
})();
