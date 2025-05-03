
// Right rotate the array by one position.
// Example: [1, 2, 3] → [3, 1, 2]
function rightrotate(arr,k){
    let n=arr.length
    k=k%n
    let res=[]
    for(let i=n-k;i<n;i++){
        res.push(arr[i])
    }
    for(let i=0;i<n-k;i++){
        res.push(arr[i])
    }
    console.log(res)

}
rightrotate([1, 2, 3],1)

// Left rotate the array by one position.
// Example: [1, 2, 3] → [2, 3, 1]



function leftRotate(arr,k){
    let n=arr.length
    k=k%n
    let res=[]
    for(let i=k;i<n;i++){
        res.push(arr[i])
    }
    let right=[]
    for(let i=0;i<k;i++){
        res.push(arr[i])
    }
    console.log(res)

}

// leftRotate([1, 2, 3],1)