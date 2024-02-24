//ascending order

let merge = (leftArr,rightArr) => {
    let sorted = [];
    while(leftArr.length&&rightArr.length){
        leftArr[0]<rightArr[0] ? sorted.push(leftArr.shift()) : sorted.push(rightArr.shift())
    }
    return [...sorted,...leftArr,...rightArr]
}

let mergeSort = (arr) => {
    if(arr.length < 2)return arr
    let middleIndex = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,middleIndex)
    let rightArr = arr.slice(middleIndex)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

let array = [1,2,4,3,678,232,12,34,15]
let res = mergeSort(array)
console.log(res)