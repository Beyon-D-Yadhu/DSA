//given a number n. Determine if it is power of 2
//solution 1
// function powerOfTwo(n){
//     if(n<1)return false
//     while (n>1){
//         if(n%2!==0){
//             return false
//         }
//         n/=2
//     }
//     return true
// }
// console.log(powerOfTwo(4));
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(1));
// console.log(powerOfTwo(0));
//Big-O = O(log(n))

//slution 2
function powerOfTwo(n){
    if(n<1)return false
    return (n&(n-1)) === 0 ?true:false
}
console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
console.log(powerOfTwo(1));
//Big-O = O(1)