// 3 way to create objecct
var newObject = {};

var newObject = Object.create( Object.prototype );

var newObject = new Object();


// 4 ways how to add props
// 1-2 methods for ECMA 3; 3 -- for ECMA 5 only
// 1. DOT syntax
//set
newObject.someKey = "Hello World";
//get
var val = newObject.someKey;

// 2. SQUARE brackets syntax
//set
newObject["someKey"] = "Hi";
//get
var val = newObject["someKey"];

// 3. Object.defineProperty
//set
Object.defineProperty( newObject, "someKey", {
  value: "something here",
  writable: true,
  enumerable: true,
  configurable: true
});
// next is shorthand
var defineProp = function ( obj, key, value ) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
// to use above
var person = Object.create( Object.prototype );

defineProp( person, "car", "Delorian" );
defineProp( person, "dateOfBirth", "1984" );
defineProp( person, "hasBeard", false );

console.log( person );
// >> Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

 // 4. Object.defineProperties
 //set
 Object.defineProperties( newObject, {
   "someKey": {
     value: "Hello world",
     writable: true
   },
   "anotherKey": {
     value: "Foo bar",
     writable: false
   }
 });
