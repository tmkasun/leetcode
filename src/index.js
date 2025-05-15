console.clear();

var removeDuplicates = function (nums) {
    let currentLength = nums.length;
    for (let i = 0; i < currentLength;) {
        const currentValue = nums[i];
        if (i < currentLength && currentValue === nums[i + 1]) {
            nums.splice(i + 1, 1);
            currentLength = nums.length;
        } else {
            i++;
        }
    }
    return nums;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(`Result: ${result}`);