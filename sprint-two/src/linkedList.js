var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else if (list.head === list.tail) {
      list.head.next = Node(value);
      list.tail = list.head.next;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  /*
    list = {list.head: {value: "first", next: {value: "second", next: {value: "third", next: null}}}, list.tail: {value: "third", next: null}
    */

  list.removeHead = function() {
    // Find the current head
    // Remove current head
    // Set next as current head
    var value = list.head.value;
    list.head = list.head.next;

    return value;

  };

  list.contains = function(target) {
    // should return a boolean
    // recursively check from head.values to head.next values

    var currentObject = list.head;
    while (currentObject !== null) {
      if (currentObject.value === target) {
        return true;
      } else {
        currentObject = currentObject.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* Linkedlist = {head: {value: value, next: null}, tail: {value: value, next: null}} */

