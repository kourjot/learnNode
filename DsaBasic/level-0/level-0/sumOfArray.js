// Find the sum of all elements in the array.
// Example: [1, 2, 3, 4] → 10

function sumOfElement(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}

sumOfElement([1, 2, 3, 4])