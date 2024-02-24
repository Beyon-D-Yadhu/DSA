let arr = [1,2,675,43,7678,54,3,6,43,8]

function divide(arr){
    if(arr.length<2)return arr
    let middleIndex = Math.floor(arr.length/2)
    let left = arr.slice(0,middleIndex)
    let right = arr.slice(middleIndex)
    return merge(divide(left),divide(right))
}

function merge(left,right){
    let res = []
    while(left.length&&right.length){
        left[0]>right[0]?res.push(right.shift()):res.push(left.shift())
    }
    return [...res,...left,...right]
}
let res = divide(arr)
console.log(res)