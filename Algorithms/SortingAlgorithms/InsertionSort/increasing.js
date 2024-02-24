// function insetionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i]
//         j = i-1
//         while(j>=0&&temp<arr[j]){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insetionSort([10,9,6,3,45,3]))



//Big-O = O(n^2)
//decreasing order
class Insertion{
    sort(arr){
        for(let i=1;i<arr.length;i++){
            let j = i-1
            let temp = arr[i]
            while (j>=0 && temp<arr[j]){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1]=temp
        }
        return arr
    }
}
let Inset = new Insertion()
let arrr = [23,4,53,12,435,32,1111,34,64,23,21,0]
console.log(Inset.sort(arrr))