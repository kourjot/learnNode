// Check whether an element exists in the array or not.
// Input: [1, 2, 3], search: 2 → Found

function elementExists(arr,k){
    let flag=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]==k){
            flag=true
            
        }

    }
    if(flag){
        console.log("yes")
    }else{
        console.log("no")
    }
    
}
elementExists([1, 2, 3],2)