// Print elements in reverse order without modifying the array.
// Example: Input: [1, 2, 3] → Output: 3, 2, 1


function reverseOrder(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }
}

reverseOrder([1, 2, 3])