//do linear search and find the smallest element in the given array
function search(arr){
    if(arr.length == 0) return null
    let small = arr[0]
    for(let i=1; i<arr.length; i++){
        if(small>arr[i]){
            small = arr[i]
        }
    }
    return small
}

console.log(search([1,43,-43,-32,45]))