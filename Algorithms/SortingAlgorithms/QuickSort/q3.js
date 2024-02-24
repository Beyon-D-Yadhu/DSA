//sort the array using quick sort and find the middle element

let quickSort = (arr)=>{
    if(arr.length<2)return arr
    let pivot = arr[arr.length-1]
    let left = [];
    let right = [];
    for(const ele of arr.slice(0,arr.length-1)){
        ele<pivot ? left.push(ele) : right.push(ele)
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

function middleEle(array){
    let res = quickSort(array)
    let middle = res[Math.floor(res.length/2)]
    return middle
}


let array = [1,2,4,3,678,232,12,34,15]
console.log("middle element = ",middleEle(array))
