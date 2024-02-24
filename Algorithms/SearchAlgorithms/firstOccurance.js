// Given a sorted array of integers, find the index of the first occurrence of 
// a specific element. If the element is not present, return -1.

function firstOccurrenceBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return result;
}

const sortedArray = [1, 2, 3, 4, 5, 5, 5, 7, 8, 9, 10];
const targetElement = 5;
console.log(firstOccurrenceBinarySearch(sortedArray, targetElement)); 
