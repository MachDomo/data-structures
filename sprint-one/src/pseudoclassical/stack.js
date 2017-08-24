var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // this = Object.create(this.prototype)
  this.storage = {};
  // return this;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function() {

};

Stack.prototype.pop = function() {

};