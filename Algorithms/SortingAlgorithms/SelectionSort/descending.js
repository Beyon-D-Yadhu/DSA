//sort the given array in descending order using selection sort
class descending{
    sort(arr){
        for(let i=0; i<arr.length-1; i++){
            let minIndex = i
            for(let j=i+1; j<arr.length; j++){
                if(arr[minIndex]<arr[j]){
                    minIndex = j
                }
            }
            if(minIndex!==i){
                let swap = arr[i]
                arr[i]=arr[minIndex]
                arr[minIndex] = swap
            }
        }
        return arr
    }
}

let dec = new descending()
let arr = [12,32,12,3,46,43,7,43,21]
let res = dec.sort(arr)
console.log(res)
