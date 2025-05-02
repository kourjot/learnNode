// Print elements at even indices.
// Example: [10, 20, 30, 40] → Output: 10, 30

function evenIndices(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            res.push(arr[i])
        }
    }
    console.log(res)
}
evenIndices([10, 20, 30, 40])