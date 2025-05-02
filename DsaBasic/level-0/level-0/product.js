// Find the product of all array elements.
// Example: [1, 2, 3, 4] → Product: 24


function  findProduct(arr){
    let sum=1
    for(let i=0;i<arr.length;i++){
        sum*=arr[i]
    }
    console.log(sum)
}

findProduct([1, 2, 3, 4] )

