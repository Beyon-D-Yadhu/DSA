//return the array of fibonacci numbers till the given number
function recursedFibArray(num){
    if(num == 0)return [0]
    if(num == 1)return [0,1]

    let arr = recursedFibArray(num-1)
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return arr
}

let num = 10
let arr = recursedFibArray(num-1)
console.log('output=',arr)