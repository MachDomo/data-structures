var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {'storage': {}};


  /// Do something
  extend(someInstance, stackMethods);


  return someInstance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    return this.storage[this.size()] = value;
  },
  pop: function() {
    var value = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return value;
  }
};

// use 'This' keyword

console.log(Stack().size());


// Stack = {
//   storage:
//   size: this.storage
//   push:
//   pop:
// };

// stack.size()