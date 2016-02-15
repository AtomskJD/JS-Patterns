// PUBLISH
// jQuery
$(el).trigger("/login", [{username: "test", userData: "test"}]);

// Dojo
dojo.publish("/login", [{username: "test", userData: "test"}]);

// YUI
el.publish("/login", [{username: "test", userData: "test"}]);


// SUBSCRIBE
// jQuery
$(el).on("/login", function ( event ) { });

// Dojo
var handle = dojo.subscribe("/login", function (data) {});

// YUI
el.on("/login", function ( data ) {});


// UNSUBSCRIBE
// jQuery
$(el).off("/login");

// Dojo
dojo.unsubscribe( handle );

// YUI
el.detach("/login");
