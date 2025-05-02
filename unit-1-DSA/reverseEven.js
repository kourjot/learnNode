function reverseEvens(N,A){
    //write code here
    let arr=A
    let n=N
    let res=[]
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            res.push(arr[i])
        }
    }
    for(let i=0;i<res.length;i++){
        for(let j=i+1;j<res.length;j++){
            if(res[i]<res[j]){
                temp=res[i]
                res[i]=res[j]
                res[j]=temp
            }
        }
    }
    console.log(res.join(" "))
}

reverseEvens(5,
   [1, 2, 3, 4, 5])