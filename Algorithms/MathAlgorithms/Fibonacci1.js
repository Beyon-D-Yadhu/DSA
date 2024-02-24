//given a number n find the first n elments of the fibonacci sequence

    function fibonacci(n){
        const fib = [0,1]
        for(let i=2;i<=n;i++){
            fib[i]=fib[i-1]+fib[i-2]
        }
        return fib
    }

    console.log(fibonacci(0))
    console.log(fibonacci(2))
    console.log(fibonacci(6))
    console.log(fibonacci(8))

    //Big-O = O(n)
    