var mediator = (function () {
  // storage topics/events
  var channels = {};


  // Subscribe to an event
  var subscribe = function ( channel, fn ) {
    if (!channels[channel]) {
      channels[channel] = [];
    }
    channels[channel].push({ context: this, callback: fn });
    return this;
  };


  // publish an event to the rest of the application
  var publish = function ( channel ) {
    if (!channels[channel]) { return false; }
    var args = Array.prototype.slice.call( arguments, 1 );
    for (var i = 0, l = channels[channel].length; i < l; i++) {
      var subscription = channels[channel][i];
      subscription.callback.apply( subscription.context, args );
    }
    return this;
  };

  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function (obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  };

}());

(function ( m ) {
  // set default value for 'person'
  var person = "Luke";

  // subscribe to a topic/event 'nameChange'
  m.subscribe('nameChange', function ( arg ) {
    console.log(person);
    person = arg;
    console.log(person);
  });

  m.publish('nameChange', 'David');

})( mediator );
