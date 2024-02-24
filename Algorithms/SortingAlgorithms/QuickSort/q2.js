//sort the array in decending order using quick sort

function quickSort(array){
    if(array.length<2)return array
    let pivot =  array[array.length-1]
    let left = []
    let right = []
    for(const el of array.slice(0,array.length-1)){
        el<pivot ? right.push(el) : left.push(el)
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let sampleArray = [3,2,1,45,64,12,76,42,78,90,32,123,5677,432,1,223,45566,338,523,890,3]
// let sampleArray = [3,2]
let res = quickSort(sampleArray)
console.log(res)