// Remove duplicate elements from the array.
// Example: [1, 2, 2, 3] → [1, 2, 3]

function  removeDuplicate(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    console.log(res)
}

removeDuplicate([1, 2, 2, 3])