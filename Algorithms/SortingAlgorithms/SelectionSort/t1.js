//Given an array. Sort the first element only with selection sort.
class SelectionSort{
    sort(arr){
        for(let i = 0; i < arr.length-1; i++){
            let minIndex = i
            for(let j = i+1; j < arr.length; j++){
                if(arr[minIndex]>arr[j]){
                    minIndex = j
                }
            }
            if(minIndex !== i){
                let swap = arr[i]
                arr[i] = arr[minIndex]
                arr[minIndex] = swap
                return arr
            }
        }
    }
}

let arr = [1,4,2,5,2,6,3,7]
let selection = new SelectionSort()
let res = selection.sort(arr)
console.log(res)