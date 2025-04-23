// 6. **Question:** Find the second largest element in an integer array.
    
//     **Input:** `[7, 2, 9, 4, 9, 5]`
    
//     **Expected Output:** `7`

let arr=[7, 2, 9, 4, 9, 5]
let max=-Infinity 
let max2=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max2=max
        max=arr[i]     
    }
}
console.log(max2)