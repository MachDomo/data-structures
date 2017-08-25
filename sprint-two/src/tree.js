var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code heret
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create Object
  // assign value key to object based on value parameter
  // put object in tree.children
  // document.body.childNodes
  var node = {};
  node.value = value;
  node.children = [];
  this.children.push(node);
};

treeMethods.contains = function(target) {
};

// Master only

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
Making a family tree.

A tree class, in functional with shared methods style, with the following properties:
.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
What is the time complexity of the above functions?
*/