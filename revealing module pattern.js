var myRevealingModule = (function () {
  var privateVar = "Beb Cherry",
      publicVar = "Hey there!";

  function privateFunction() {
    console.log( "Name: " + privateVar );
  }

  function publicSetName( strName ) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // now REVEAL public pointers

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();


myRevealingModule.setName( "Paul Kinlan" );
myRevealingModule.getName();


var myRevealingModule2 = (function () {
  var privateCounter = 0;

  function privateFunction () {
    privateCounter++;
  }

  function publicFunction () {
    publicIncrement();
  }

  function publicIncrement () {
    privateFunction();
  }

  function publicGetCount () {
    return privateCounter;
  }


  // now REVEAL

  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
  };
})();

myRevealingModule2.start();
myRevealingModule2.increment();
console.log(myRevealingModule2.count());
