var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let index = someInstance.size();
    storage[index] = value;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
