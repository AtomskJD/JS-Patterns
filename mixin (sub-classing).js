var Person = function ( firstName, lastName ) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
};

Person.prototype.say = function () {
  console.log("say that");
}
var clark = new Person( "Clark", "Kent" );

var Superhero = function ( firstName, lastName, powers ) {

  // this is attach only constructor of main class
  Person.call( this, firstName, lastName );

  this.powers = powers;
}

// then this is contain all onther stuff like methods etc.
Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero("Clark", "Kent", ["flight","heat-vision"] );
superman.say();

console.log( superman );
