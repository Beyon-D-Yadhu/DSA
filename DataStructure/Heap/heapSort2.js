function heapSort(arr){
    buildMaxHeap(arr)
}

function buildMaxHeap(arr){
    for(let i=Math.floor((arr.length-1)/2)-1; i>=0; i--){
        heapify(arr,i,arr.length)
    }
}

function heapify(arr,index,arrSize){
    let left = index*2+1;
    let right = index*2+2;
    let largest = index
    if(left<arrSize && arr[left]>arr[largest]){
        largest =left
    }
    if(right<arrSize && arr[right]>arr[largest]){
        largest = right
    }
    if(largest !== index){
        [arr[index],arr[largest]]=[arr[largest],arr[index]]
        heapify(arr,largest,arrSize);
    }
}