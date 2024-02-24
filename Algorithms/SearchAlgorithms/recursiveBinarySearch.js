//Given an array and a target. If target is found return the index otherwis -1. Use Recursion
function recursiveBinarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1
    return binarySearch(arr,target,leftIndex,rightIndex)
}
function binarySearch(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(arr[middleIndex]===target)return middleIndex
    if(target>arr[middleIndex]){
        leftIndex = middleIndex+1
    }else{
        rightIndex = middleIndex-1
    }
    return binarySearch(arr,target,leftIndex,rightIndex)
}
console.log(recursiveBinarySearch([1,2,3,4,5,6],6))
console.log(recursiveBinarySearch([1,2,3,4,5,6],0))
console.log(recursiveBinarySearch([1,2,3,4,5,6],4))
//Big-O = O(logn)