import { assert } from './utils/Assert.js'
import { Initi } from './utils/index.js'
Initi();
const twoSum = function (numbers, target) {
    for (let i = 0, j = numbers.length - 1; i !== j;) {
        const sum = numbers[i] + numbers[j];
        if (sum > target) {
            j--;
        }
        if (sum < target) {
            i++
        }
        if (sum === target) {
            return [i + 1, j + 1]
        }
    }
};

assert(twoSum([2, 7, 11, 15], 9), [1, 2])
assert(twoSum([-1,0], -1), [1, 2])