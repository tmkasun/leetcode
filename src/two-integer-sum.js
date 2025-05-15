function twoSum(nums, target) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }
    for (let j = 0; j < nums.length; j++) {
        const diff = target - nums[j];
        if (hashMap[diff] !== undefined && hashMap[diff] !== j) {
            return [j, hashMap[diff]]
        }
    }
    return []
}


const result = twoSum([3, 4, 5, 6], 7);
console.log(`Result = ${result}`)