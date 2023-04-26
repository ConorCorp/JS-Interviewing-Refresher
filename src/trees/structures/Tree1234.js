const TreeNode = require("./TreeNode");

const Tree1 = new TreeNode(1);

const Node2 = new TreeNode(2);
Tree1.left = Node2;

const Node3 = new TreeNode(3);
Tree1.right = Node3;

const Node4 = new TreeNode(4);
Node2.left = Node4;

module.exports = Tree1;
