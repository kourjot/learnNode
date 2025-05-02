// 8. Find the Factorial of a Number (Using Recursion)
// Problem: Ek number diya gaya hai, uska factorial calculate karo (n!).

// Example: Input: 5, Output: 120 (5! = 5 × 4 × 3 × 2 × 1)

function findtheFactorial(n){
    if(n==0 || n==1){
        return 1
    }
   return n*findtheFactorial(n-1)
    
}
console.log(findtheFactorial(5))