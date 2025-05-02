// Reverse the array.
// Example: [1, 2, 3] → [3, 2, 1]

function reverseTheArray(arr){
    let res=[]
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    console.log(res)
}

reverseTheArray([1, 2, 3])