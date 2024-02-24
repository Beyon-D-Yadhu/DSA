let arr = [12,43,74,2,4,22,21,42,5,3]
function quickSort(arr){
    if(arr.length<2)return arr
    let pivot = arr[arr.length-1]
    let left =[]
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let res = quickSort(arr)
console.log(res);