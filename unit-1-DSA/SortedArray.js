function checkArray(arr){
    //write code here
    let flag=false
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            flag=true
        }
    }
    if(flag){
        console.log("Yes")
    }else{
        console.log("No")
    }
}


checkArray([9,4,2,1])
