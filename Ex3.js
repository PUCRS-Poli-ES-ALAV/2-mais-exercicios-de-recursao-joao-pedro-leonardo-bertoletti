function fibo(n) { 
    if (n < 0 ) {
        return `deu ruim pai`
    }
    if( n < 2 ) return n 
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(7))    

