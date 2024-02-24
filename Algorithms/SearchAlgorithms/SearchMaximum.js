//write a program to find the maximum number from the given array
function numberMaximum(arr){
    let max = arr[0]
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }return max
}

console.log(numberMaximum([12,78,9,4,56]))