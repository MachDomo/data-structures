

// Instantiate a new graph
var Graph = function() {
  // this = Object.create(Graph.prototype);

  // return this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {value: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this.hasOwnProperty(target);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (typeof this[node].edge === 'number') {
    var otherEdge = this[node].edge;
    delete this[otherEdge].edge;
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].edge === toNode && this[toNode].edge === fromNode) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add edge property to fromNode, set reference to toNode
  this[fromNode].edge = this[toNode].value;
  this[toNode].edge = this[fromNode].value;
  // add edge property to toNode, set reference to fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edge;
  delete this[toNode].edge;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var graph = new Graph(); // {}
// graph.addNode(1); // {1:1}
// console.log(graph.contains(1)); //true


// Representing how a collection of websites (or the entire world wide web) link to each other, and many other things

// Implement a graph class, in pseudoclassical style, with the following properties:
// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
// An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// What is the time complexity of the above functions?