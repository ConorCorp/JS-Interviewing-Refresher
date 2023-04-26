class NodeQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }
}

/**
 *
 * @param {TreeNode} treeNode
 * @returns
 */

module.exports = (treeNode, numberToFind) => {
  const nodeQueue = new NodeQueue();
  nodeQueue.enqueue(treeNode);

  let visits = 0;

  while (nodeQueue.queue.length > 0) {
    let node = nodeQueue.dequeue();
    visits++;
    if (node.value === numberToFind) return visits;

    // If not found
    if (node.left) nodeQueue.enqueue(node.left);
    if (node.right) nodeQueue.enqueue(node.right);
  }

  return null;
};
