/**
 * In Order, Recursive
 * @param {TreeNode} treeNode
 * @returns
 */
const dFSRecurse = (treeNode, numberToFind) => {
  let visits = 0;
  const _dFSRecurse = (treeNode, numberToFind) => {
    visits++;
    if (treeNode.left) {
      const result = _dFSRecurse(treeNode.left, numberToFind);
      if (result) return result;
    }
    if (treeNode.value === numberToFind) return visits;
    if (treeNode.right) {
      const result = _dFSRecurse(treeNode.right, numberToFind);
      if (result) return result;
    }
  };
  const result = _dFSRecurse(treeNode, numberToFind);
  return result ? result : null;
};

const dFSTreeHeight = (root) => {
  let maxHeight = 0;
  let currHeight = 0;

  const dfs = (root) => {
    currHeight++;
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
    if (currHeight > maxHeight) maxHeight = currHeight;
    currHeight--;
  };
  dfs(root);
  return maxHeight - 1; // Minus 1 because we've counted nodes, not edges
};

module.exports = {
  dFSRecurse,
  dFSTreeHeight,
};
