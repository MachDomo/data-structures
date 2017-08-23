var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // adds to the end of the queue
    let index = someInstance.size();
    return storage[index] = value;
  };

  someInstance.dequeue = function() {
    // removes from the beginning of queue
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
