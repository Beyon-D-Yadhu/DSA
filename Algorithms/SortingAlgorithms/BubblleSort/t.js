let arr = [1,2,3,2,1,34,54,32,12,32,112,12,43]
function bubleSort(arr){
    let swap 
    do{
        swap = false
        for(i=0;i<arr.length;i++){
            if(arr[i]<arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swap = true
            }
        }
    }while(swap)
    console.log(arr)
}
bubleSort(arr)