//given a number.Determine if it is prime or not

function prime(n){
    if(n<2)return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return false
    }
    return true
}
console.log(prime(0));
console.log(prime(1))
console.log(prime(2));
console.log(prime(5));
console.log(prime(10))

//Big-O = O(n)