import { buildTree } from "./utils/Tree.js";

var maxDepth = function (root) {
    let level = 0;
    if (!root) {
        return level;
    }
    const queue = [root];
    while (queue.length > 0) {
        const currentSize = queue.length;
        for (let i = 0; i < currentSize; i++) {
            const current = queue.shift();
            if (current.left) {
                queue.push(current.left)
            } if (current.right) {
                queue.push(current.right)
            }
        }
        level++

    }
    return level;
};
const test = buildTree([3, 9, 20, null, null, 15, 7])

const depth = maxDepth(test);
console.log(`Depth = ${depth}`)