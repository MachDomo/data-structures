var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    return storage[someInstance.size() + count] = value;
  };

  someInstance.dequeue = function() {
    var value = storage[count];
    delete storage[count];
    count++;
    return value;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;

};

