var myModule = (function ( jQ, _ ) {

  function privateMethod1() {
    jQ(".container").html("test");
  }

  function privateMethod2() {
    console.log( _.min([10, 5, 3, 100, 2]) );
  }

  return {
    publicMethod: function () {
      privateMethod1();
    }
  };

// pull in ext modules
})( jQuery, _ );

myModule.publicMethod();
