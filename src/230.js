import { assert, buildTree } from "./utils/index.js";

function kthSmallest(root, k) {
    const result = [];
    let depth = 0;
    const xOrder = (node) => {
        if (!node || depth > k) {
            return
        }
        xOrder(node.left);
        depth++
        result.push(node.val);
        xOrder(node.right);

    }

    xOrder(root)
    return result[k - 1]

}
assert(kthSmallest(buildTree([2, 1, 3]), 1), 1)
assert(kthSmallest(buildTree([4, 3, 5, 2, null]), 4), 5)