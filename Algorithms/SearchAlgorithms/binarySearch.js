// Given an array of elements 'arr' and a target element 'target'. Find the index of target or return -1
function binarySearch(arrr,target){
    let arr = arrr.sort((a,b)=>a-b)
    let firstIndex = 0;
    let lastIndex = arr.length-1;
    while(firstIndex<=lastIndex){
        let middleIndex = Math.floor((firstIndex+lastIndex)/2)
        if(arr[middleIndex]===target)return middleIndex
        if(target > arr[middleIndex]){
            firstIndex = middleIndex+1
        }else{
            lastIndex = middleIndex -1
        }
    }
    return -1
}

console.log(binarySearch([-5,2,10,4,7],4));
console.log(binarySearch([-5,2,10,4,7],-5));
console.log(binarySearch([-5,2,10,4,7],11));
//Big-O = O(logn)