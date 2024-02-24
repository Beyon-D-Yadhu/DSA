let arr = [1,23,44,2,656,7,342,32,78]

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let temp = i
        for(j=i+1;j<arr.length;j++){
            if(arr[temp]>arr[j]){
                temp = j
            }
        }
        if(i!==temp){
            let swap = arr[i]
            arr[i]=arr[temp]
            arr[temp] = swap
        }
    }
    console.log(arr)
}
selectionSort(arr)