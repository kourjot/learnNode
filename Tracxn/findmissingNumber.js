// Find the Missing Number in an Array (1 to N)
// Problem: Ek array diya gaya hai jisme numbers from 1 to N hain, lekin ek number missing hai. Us missing number ko find karo.

// Example: Input: [1, 2, 3, 5], Output: 4


function findtheMissingNumber(arr){
    let n=arr.length+1
    let arraySum=(n*(n+1))/2
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(arraySum-sum)
}
findtheMissingNumber([1, 2, 3, 5])

let arr=[23,45,8,9]
let a=[]
// 9 8 
