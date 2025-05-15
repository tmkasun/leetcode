import { assert, buildGraph } from "./utils/index.js";
const findOrder = function (numCourses, prerequisites) {
    const visited = new Set();
    let isCycle = false;
    const traverse = (node) => {
        if (!node) {
            return
        }
        if (visited.has(node.val)) {
            isCycle = true
            return
        }
        visited.add(node);
        for (const neighbor of node.neighbors) {
            traverse(neighbor)
        }
    }
    for (const [node, neighbors] of prerequisites) {
        console.log(neighbors)
        traverse(neighbors)
    }
};

assert(findOrder(4, buildGraph([[1, 0], [2, 0], [3, 1], [3, 2]], true)), [[0, 2, 1, 3]])