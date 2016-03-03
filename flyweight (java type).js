Function.prototype.implementsFor = function ( parentClassObject ) {
  if ( parentClassObject.constructor === Function ) {
    // normal inhetitance
    this.prototype = new parentClassOrObject();
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } else {
    // pure virual inheritance
    this.prototype = parentClassObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassObject;
  }

  return this;
};



// FW object
var CoffeeOrder = {
  // interfaces
  serveCoffee:  function (context) {},
  getFlavor:    function () {}
};



// ConcreteFW implements CoffeeOrder
function CoffeeFlavor ( newFlavor ) {
  var flavor = newFlavor;

  // if interface has been implemented implement feature
  // override method
  if ( typeof this.getFlavor == 'function' ) {
    this.getFlavor = function () {
      return flavor;
    };
  }

  if ( typeof this.serveCoffee == 'function') {
    this.serveCoffee = function ( context ) {
      console.log('Serving Coffee flavor ' + flavor + ' to table number ' + context.getTable());
    };
  }
}


// implements interface for CoffeeOrder
CoffeeFlavor.implementsFor( CoffeeOrder );

// Handle table numbers for a coffee order
function CoffeeOrderContext (tableNumber) {
  return {
    getTable: function () {
      return tableNumber;
    }
  };
}




// flavor FACTORY
function CoffeeFlavorFactory () {
  var flavors = {},
      length = 0;

  return {
    getCoffeeFlavor: function ( flavorName ) {
      var flavor = flavors[flavorName];
      if ( typeof flavor === 'undefined' ) {
        flavor = new CoffeeFlavor( flavorName );
        flavors[flavorName] = flavor;
        length++;
      }
      return flavor;
    },
    getTotalCoffeeFlavorsMade: function () {
      return length;
    }
  };
}




// USAGES
function testFlyweight () {
  var flavors     = new CoffeeFlavor(),
      tables      = new CoffeeOrderContext(),
      ordersMade  = 0,
      flavorFactory;

  function takeOrders ( flavorIn, table ) {
    flavors[ordersMade] = flavorFactory.getCoffeeFlavor( flavorIn );
    tables[ordersMade++] = new CoffeeOrderContext( table );
  }

  flavorFactory = new CoffeeFlavorFactory();


   takeOrders("Cappuccino", 2);
   takeOrders("Cappuccino", 2);
   takeOrders("Frappe", 1);
   takeOrders("Frappe", 1);
   takeOrders("Xpresso", 1);
   takeOrders("Frappe", 897);
   takeOrders("Cappuccino", 97);
   takeOrders("Cappuccino", 97);
   takeOrders("Frappe", 3);
   takeOrders("Xpresso", 3);
   takeOrders("Cappuccino", 3);
   takeOrders("Xpresso", 96);
   takeOrders("Frappe", 552);
   takeOrders("Cappuccino", 121);
   takeOrders("Xpresso", 121);

   for (var i = 0; i < ordersMade; ++i) {
       flavors[i].serveCoffee(tables[i]);
   }
   console.log(" ");
   console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());
}

testFlyweight();
