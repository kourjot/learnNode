// 4. **Question:** Rotate an integer array to the right by *k* positions.
    
//     **Input:** Array: `[1, 2, 3, 4, 5]`, k: `2`
    
//     **Expected Output:** `[4, 5, 1, 2, 3]`

let arr=[1,2,3,4,5]
let k=2
function findRotate(arr,k){
    let n=arr.length
    k=k%n
    let last=arr.slice(n-k)
    let first=arr.slice(0,n-k)
    console.log(last+","+first)  
}
findRotate(arr,k)