// 5. **Question:** Merge two sorted integer arrays into one sorted array.
    
//     **Input:** `[1, 3, 5]` and `[2, 4, 6]`
    
//     **Expected Output:** `[1, 2, 3, 4, 5, 6]`
let a1=[1, 3, 5]
let a2=[2, 4, 6]
function mergeArr(a1,a2){
    let res=[]
    let i=0
    let j=0
    while(i<a1.length && j<a2.length){
       if (a1[i]>a2[j]){
        res.push(a2[j])
        j++
       }else{
        res.push(a1[i])
        i++
       }
    }
    while(i<a1.length){
        res.push(a1[i])
        i++
    }
    while(j<a2.length){
        res.push(a2[j])
        j++
    }
    console.log(res)
}
mergeArr(a1,a2)