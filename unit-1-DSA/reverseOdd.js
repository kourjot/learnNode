// 5
// 38 1 67 23 31 

function reverseOdd(n,arr){
    let res=[]  
    for(let i=0;i<n;i++){
        if(arr[i]%2!==0){
            res.push(arr[i])
        }
    }

    for(let i=0;i<res.length;i++){
        for(let j=i+1;j<res.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log(res)
}
reverseOdd(5,[38, 1, 67 ,23, 31])
