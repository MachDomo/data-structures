var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create Object
  // assign value key to object based on value parameter
  // put object in tree.children
  // document.body.childNodes
  // var node = {};
  // node.value = value;
  // node.children = [];
  // _.extend(node, treeMethods);

  // this.children.push(node);
  // return node;
  var child = Tree(value);
  child.parent = this;
  return this.children.push(child);

};


treeMethods.contains = function(target) {
  // take an input (target)
  var isTrue = false;
  var x = function(node) {
    if (node.value === target) {
      isTrue = true;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        x(node.children[i]);
      }
    }
  };
  x(this);
  return isTrue;
};

