var pubsub = {};

(function (myObject) {
  // storage topics
  var topics = {};

  // topic ID
  var subUid = -1;



  // publish or broadcast events
  myObject.publish = function ( topic, args ) {
    if ( !topics[topic] ) {
      return false;
    }

    var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func( topic, args );
    }

    return this;
  };



  // Subscrbe to events of interests
  myObject.subscribe = function ( topic, func ) {
    if ( !topics[topic] ) {
      topics[topic] = [];
    }

    var token = ( ++subUid ).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };



  // Unsubscribe from specific topic
  myObject.unsubscribe = function ( token ) {
    for (var m in topics) {
      if ( topics[m] ) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if ( topics[m][i].token === token ) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  };


}( pubsub ));



var messageLogger = function ( topics, data ) {
  console.log("Logging: " + topics + ": " + data);
};

var subscription = pubsub.subscribe( "inbox/newMessage", messageLogger );

pubusb.publish( "inbox/newMessage", "hello world" );

pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );

pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com",
  body: "hey again!!!"
});

pubsub.unsubscribe( subscription );


pubsub.publish( "inbox/newMessage", "hello! are you still there?");
