var myModule = (function () {
  // module Object
  var module = {},
      privateVariable = "HELLO hello";

  function privateMethod() {
    // .....
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };

  return module;

})();


console.log(myModule.publicProperty);
console.log(myModule.publicMethod());
