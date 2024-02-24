//decreasing vise
function decreseInsertion(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i]
        let j = i-1
        while(i>=0 && arr[j]<temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}

let arr = [1,2,3,4,5,6,7,8]
console.log(decreseInsertion(arr))