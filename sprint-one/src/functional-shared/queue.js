var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {'storage': {}, 'count': 0};
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  enqueue: function(value) {
    this.storage[this.size() + this.count] = value;
    this.count++;
  },
  dequeue: function() {

  }
};


