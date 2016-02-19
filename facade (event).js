// trying crossbrouser facade
var addMyEvent = function ( el, ev, fn ) {
  if (el.addEventListener) {
    el.addEventListener( ev, el, false );
  } else if (el.attachEvent) {
    el.attachEvent("on" + ev, fn);
  } else {
    el["on"+ev] = fn;
  }
};
