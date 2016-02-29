var decoratorApp = decoratorApp || {};

decoratorApp = {
  defaults: {
    validate: false,
    limit: 5,
    name: "foo",
    welcome: function () {
        console.log( "welcome!" );
    }
  },

  oplions: {
    validate: true,
    name: "bar",
    helloworld: function () {
      console.log("hello world");
    }
  },

  settings: {},

  printObj: function ( obj ) {
    var arr = [], next;

    $.each( obj, function ( key, val ) {
      next = key + ": ";
      next += $.isPlainObject(val) ? printObj(val) : val;
      arr.push(next);
    });
    return "{ " + arr.join(", ") + " }";
  }
};

decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);




$("#log")
    .append( decoratorApp.printObj(decoratorApp.settings) +
          + decoratorApp.printObj(decoratorApp.options) +
          + decoratorApp.printObj(decoratorApp.defaults));

// settings -- { validate: true, limit: 5, name: bar, welcome: function (){ console.log( "welcome!" ); },
// helloWorld: function (){ console.log( "hello world" ); } }
// options -- { validate: true, name: bar, helloWorld: function (){ console.log( "hello world" ); } }
// defaults -- { validate: false, limit: 5, name: foo, welcome: function (){ console.log("welcome!"); } }
