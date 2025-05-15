import { assert } from "./utils/index.js";

const nextGreaterElement = function (nums1, nums2) {
    const results = Array.from({ length: nums1.length })
    for (let index1 = 0; index1 < nums1.length; index1++) {
        const num1 = nums1[index1];
        results[index1] = -1;
        let found = false;
        for (let index2 = 0; index2 < nums2.length; index2++) {
            const num2 = nums2[index2];
            if (num1 === num2) {
                found = true;
            }
            if (found && num2 > num1 && results[index1] == -1) {
                results[index1] = num2
            }

        }
    }
    return results
};

assert(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1])