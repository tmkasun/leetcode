import { assert } from "./utils/index.js";


var topKFrequent = function (nums, k) {
    const countMap = {};
    for (const num of nums) {
        if (!countMap[num]) {
            countMap[num] = 1
        } else {
            countMap[num] += 1
        }
    }
    const sortedTop = Object.entries(countMap).sort(([, a], [, b]) => {
        return b - a
    })
    const sortedTopK = [];

    for (let i = 0; i < k; i++) {
        sortedTopK.push(parseInt(sortedTop[i][0]))
    }
    return sortedTopK
};

assert(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])
assert(topKFrequent([1], 1), [1])
assert(topKFrequent([3, 0, 1, 0], 1), [0])
assert(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2), [2, -1])