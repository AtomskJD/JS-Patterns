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

pubsub.publish( "inbox/newMessage", "hello world" );

pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );

pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com",
  body: "hey again!!!"
});

pubsub.unsubscribe( subscription );


pubsub.publish( "inbox/newMessage", "hello! are you still there?");



// user interface notification
// return the current local time
getCurrentTime = function () {
  var date = new Date(),
      m = date.getMonth() +1,
      d = date.getDate(),
      y = date.getFullYear(),
      t = date.toLocaleTimeString().toLowerCase();

  return (m + "/" + d + "/" + y + " " + t);
};

// Add a new data row to grid
function addGridRow ( data ) {
  console.log("update grid component with: " + data);
}

function updateCounter( data ) {
  console.log( "data last updated at: " + getCurrentTime() + " with " + data);
}

gridUpdate = function ( topic, data ) {
  if ( data !== undefined ) {
    addGridRow( data );
    updateCounter( data );
  }
};

var subscriber = pubsub.subscribe( "newDataAvailable", gridUpdate );


pubsub.publish( "newDataAvailable", {
  summary: "Apple made $5 billion",
  identifier: "APPL",
  stockPrice: 570.91
});

pubsub.publish( "newDataAvailable", {
  summary: "Microsoft made $20 million",
  identifier: "MSFT",
  stockPrice: 30.85
});
