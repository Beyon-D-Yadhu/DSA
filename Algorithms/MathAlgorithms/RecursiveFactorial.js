//Fiind the factorial of the given number using recursion

function recursiveFactorial(n){
    if(n==1)return 1
    return n*recursiveFactorial(n-1)
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(10));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(2));

//Big-O = O(n)