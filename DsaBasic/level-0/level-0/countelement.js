// Count how many times a given number appears in the array.
// Example: [1, 2, 2, 3], search: 2 → Count: 2

function  countNumber(arr,k){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==k){
            count++
        }
    }
    console.log(count)
}

countNumber([1, 2, 2, 3],2)