// subject prototype
function ObserverList () {
  this.ObserverList = [];
}


ObserverList.prototype.add = function ( obj ) {
  return this.ObserverList.push ( obj );
};

ObserverList.prototype.count = function () {
  return this.ObserverList.length;
};

ObserverList.prototype.get = function ( index ) {
  if ( index > -1 && index < this.ObserverList.length ) {
    return this.ObserverList[ index ];
  }
};

ObserverList.prototype.indexOf = function ( obj, startIndex ) {
  var i = startIndex;

  while ( i < this.ObserverList.length ) {
    if ( this.observerList[i] == obj ) {
      return i;
    }
    i++;
  }
  return -1;
};

ObserverList.prototype.removeAt = function ( index ) {
  this.observerList.splice( index, 1 );
};


// subject
function Subject () {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function ( observer ) {
  this.observers.add( observer );
}

Subject.prototype.removeObserver = function ( observer ) {
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

Subject.prototype.notify = function ( context ) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount;  i++) {
    this.observers.get(i).update( context );
  }
};


// observer
function Observer () {
  this.update = function () {
    // ...
  };
}


// Extend an object with an extension
function extend( obj, extension ) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

// references to DOM elements
var controlChecbox = document.getElementById("mainCheckbox"),
    addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer");


/**
 *  Concrete Subject
 */
extend( controlChecbox, new Subject() );

controlChecbox.onclick = function () {
  controlChecbox.notify( controlChecbox.checked );
};

addBtn.onclick = addNewObserver;

/**
 * Concrete Observer
 */
function addNewObserver() {
  // create new checkbox
  var check = document.createElement("input");
  check.type = "checkbox";

  extend( check, new Observer() );
  check.update = function ( value ) {
    this.checked = value;
  };

  // add new observer to list
  controlChecbox.addObserver( check );
  container.appendChild( check );
}
