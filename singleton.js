var mySingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // the Singleton
    function privateMethod() {
      console.log( "I am privateMethod" );
    }

    var privateVariable = "I am also privateVariable";
    var privateRandomNumber = Math.random();

    return {
      // now time for public methods & vars
      publicMethod: function () {
        console.log( "The publicMethod" );
      },
      publicProoerty: "I am also publicProoerty",
      getRandomNumber: function () {
        return privateRandomNumber;
      }
    };
  };

  return {
    // get Singleton instance if one exists or create one
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();



var myBadSingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    var privateRandomNumber = Math.random();
    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    // Always create a new Singleton instance
    getInstance: function () {
      instance = init();
      return instance;
    }
  };
})();

// in action

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( "Singleton: ", singleA.getRandomNumber() === singleB.getRandomNumber());

var badSingletonA = myBadSingleton.getInstance();
var badSingletonB = myBadSingleton.getInstance();
console.log( "Bad singleton: ", badSingletonA.getRandomNumber() === badSingletonB.getRandomNumber() );
