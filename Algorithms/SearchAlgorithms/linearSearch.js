// Given an array of elements 'arr' and a target element 'target'. Find the index of target or return 1

function linearSearch(arr,target){
    for(let index=0;index<arr.length;index++){
        if(target==arr[index])return index
    }
    return -1
}

console.log(linearSearch([-5,2,10,4,7],4))
console.log(linearSearch([-5,2,10,4,7],-5))
console.log(linearSearch([-5,2,10,4,7],11))

//Big-O = O(n)