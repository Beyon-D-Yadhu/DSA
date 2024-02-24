//sort the array in acending order using quick sort

function quickSort(array){
    if(array.length<2)return array
    let pivot = array[array.length-1]
    let leftArray = []
    let rightArray = []
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}


let sampleArray = [3,2,1,45,64,12,76,42,78,90,32,123,5677,432,1,223,45566,338,523,890,3]
// let sampleArray = [3,2]
let res = quickSort(sampleArray)
console.log(res)