const TreeNode = require("./TreeNode");

// Height is 3 edges

const Tree1 = new TreeNode(1);

const Node2 = new TreeNode(2);
Tree1.right = Node2;

const Node3 = new TreeNode(3);
Node2.right = Node3;

const Node4 = new TreeNode(4);
Node3.left = Node4;

module.exports = Tree1;
