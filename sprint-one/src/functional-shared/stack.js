var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  /// Do something

  return someInstance;
};

var stackMethods = {};

// use 'This' keyword
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};