let arr=[73, 74, 75, 71, 69, 72, 76, 73]
op=[1, 1, 4, 2, 1, 1, 0, 0]
let res=[]
for(let i=0;i<arr.length;i++){
    let flag=true
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]>arr[i]){
            res.push(j-i)
            flag=false
            break
        }
    }
    if(flag){
        res.push(0)
    }
}
console.log(res)
