// 3. **Question:** Remove all zeros from an integer array, preserving order.
    
//     **Input:** `[0, 1, 0, 2, 3, 0, 4]`
    
//     **Expected Output:** `[1, 2, 3, 4]`

let arr=[0, 1, 0, 2, 3, 0, 4]
let res=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        continue
    }else{
       res.push(arr[i])
    }
}
// *********************** Second way using filter**************
let rs=arr.filter(i=>i!=0)
console.log(rs)
console.log(res)