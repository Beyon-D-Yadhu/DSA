//given a number find the factorial

function factorial(n){
    let fact = 1
    for(i=2;i<=n;i++){
        fact *= i
    }
    return fact
}


console.log(factorial(0))
console.log(factorial(5))

// Big-O = O(n)