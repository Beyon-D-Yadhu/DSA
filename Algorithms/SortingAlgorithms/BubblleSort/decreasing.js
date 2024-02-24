//sort the fiven array in decreasing order
function bubbleDecreasing(arr){
    let swap
    do{
        swap = false
        for(let i=0; i<arr.length; i++){
            if(arr[i]<arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swap = true
            }
        }
    }while(swap)
    return arr
}

console.log(bubbleDecreasing([1,2,5,3,56,34,12]))