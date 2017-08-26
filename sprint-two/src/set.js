var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // Check if in set.storage
  // if no, push to set.storage
  if (!(this.contains())) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // find item in the set
  return _.contains(this.storage, item);
  // if yes, return true, else return false
};

setPrototype.remove = function(item) {

  var index = _.indexOf(this.storage, item);
  delete this.storage[index];
  // should delete that item from set

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
