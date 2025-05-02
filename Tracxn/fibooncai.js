// . Fibonacci Series
// Problem: Fibonacci series ko print karo.

// Example: First 10 numbers of Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function Fibonacciseries(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return Fibonacciseries(n-1)+Fibonacciseries(n-2)
}

console.log(Fibonacciseries(10))