let arr = [12,32,53,43,21,34,765,334,213,27]

function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let temp = arr[i]
        let j = i-1
        while(j>=0 && temp < arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    console.log(arr)
}

insertionSort(arr)