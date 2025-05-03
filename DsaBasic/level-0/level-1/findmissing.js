// Find the missing number in an array of first N natural numbers.
// Example: [1, 2, 4, 5] → Missing: 3

function findmissingNumber(arr){
    let n=arr.length+1
    let x=(n*(n+1))/2
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(x-sum)
}

findmissingNumber([1, 2, 4, 5])