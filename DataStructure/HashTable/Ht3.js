// You are given an array of integers. Write a function to find two numbers such that 
// they add up to a specific target. Return the indices of the two numbers.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. 

//Used Inbuilt hashtable (Map)

function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null;
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
if (result !== null) {
    const [index1, index2] = result;
    console.log(`Indices of the two numbers that add up to ${target}: ${index1}, ${index2}`);
} else {
    console.log(`No solution found for target ${target}`);
}
