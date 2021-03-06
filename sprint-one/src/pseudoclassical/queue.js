var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size() + this.count] = value;
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.count];
  delete this.storage[this.count];
  this.count++;
  return value;
};


