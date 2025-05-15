export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  return this;
}
TreeNode.prototype.print = function () {
  const queue = [this];
  let currentLevel = this.maxDepth() + 1;
  while (queue.length > 0) {
    const sizeOfLevel = queue.length;
    const levelNodes = [];
    for (let i = 0; i < sizeOfLevel; i++) {
      const currentNode = queue.shift();
      if (currentNode) {
        const { left, right, val } = currentNode;
        levelNodes.push(val);
        queue.push(left);
        queue.push(right);
      } else {
        levelNodes.push("*");
      }
    }
    const levelSpaces = `${" ".repeat(currentLevel ** 2)}`;
    let levelNodesString = "";
    for (let i = 0; i < levelNodes.length; i++) {
      if (i % 2 === 0 && i !== 0) {
        levelNodesString += `${levelSpaces}`;
      }
      levelNodesString += `${levelSpaces}${levelNodes[i]}`;
    }
    const levelString = `${levelNodesString}`;
    currentLevel--;
    if (currentLevel !== 0) {
      console.log(levelString);
    }
  }
  return this;
};
TreeNode.prototype.maxDepth = function (node = this) {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
};

TreeNode.prototype.preOrder = function () {
  const nodes = [];
  const travers = (node) => {
    if (node === null) {
      return;
    }
    nodes.push(node.val);
    travers(node.left);
    travers(node.right);
  };
  travers(this);
  return nodes;
};
TreeNode.prototype.levelOrder = function () {
  const nodes = [];
  if (!this) {
    return null;
  }
  const queue = [this];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode) {
      const { left, right, val } = currentNode;
      nodes.push(val);
      queue.push(left);
      queue.push(right);
    } else {
      nodes.push(currentNode);
    }
  }
  return nodes
    .join(" ")
    .trim()
    .split(" ")
    .map((n) => (n === "" ? null : parseInt(n, 10)));
};

/**
 * from level order traveresed tree
 * @param {*} arry
 */
export const buildTree = (arry) => {
  const root = new TreeNode(arry.shift());
  const queue = [root];
  while (queue.length > 0 && arry.length > 0) {
    const currentNode = queue.shift();
    const left = arry.shift();
    const right = arry.shift();
    if (left !== null && left !== undefined) {
      currentNode.left = new TreeNode(left);
      queue.push(currentNode.left);
    }
    if (right !== null && right !== undefined) {
      currentNode.right = new TreeNode(right);
      queue.push(currentNode.right);
    }
  }
  root.print();
  return root;
};
