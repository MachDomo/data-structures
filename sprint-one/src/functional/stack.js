var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    return storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    //return storage;
    delete storage[someInstance.size() - 1];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
