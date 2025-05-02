// Find the average of elements in the array.
// Example: [1,2] → Average: 4.0

function avgElement(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    let x=sum/arr.length
    console.log(x)
}

avgElement([1,2])