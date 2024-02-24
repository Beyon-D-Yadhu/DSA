function recursiveBinarySearch(arr,tar){
    let left = 0
    let right = arr.length-1
    return recursion(arr,tar , left, right)
}

function recursion(arr, target,left,right){
    let middleIndex = Math.floor((left+right)/2)
    if(arr[middleIndex]==target)return middleIndex
    if(left>right)return
    if(target<arr[middleIndex]){
        right = middleIndex-1
    }else{
        left = middleIndex+1
    }
    return recursion(arr,target,left,right)
}

let ans = recursiveBinarySearch([1,2,3,4,6,7,8,9,10],3)

console.log(ans)