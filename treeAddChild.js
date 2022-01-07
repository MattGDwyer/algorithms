// A method for adding a child to a tree data structure

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  debugger;

  if (this.children[0] === undefined) {
      this.children[0] = Tree(value);
      return;
  } else if (this.children[1] === undefined) {
      this.children[1] = Tree(value);
      return;
  } else {
      if (this.children[0].children.length < 2) {
          this.children[0].addChild(value);
      } else {
          this.children[1].addChild(value);
      }
  }


};
