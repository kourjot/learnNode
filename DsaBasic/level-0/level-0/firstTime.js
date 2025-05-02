// Find the index of the first occurrence of a number.
// Example: [5, 3, 7, 3], search: 3 → Index: 1

function firstOccurrence(arr,k){
   let res=0
   for(let i=0;i<arr.length;i++){
    if(arr[i]==k){
        res=i   
        break
    }
    
   } 
   console.log(res)  
}

// firstOccurrence([5, 3, 7, 3],3)


arr=[5,3,4,6,8]
function solve(arr){
    let x=arr.indexOf(6,8)
    console.log(x)
    if(x!=-1){
        console.log("Found")
    }else{
        console.log("Not found")

    }

}
solve([5,3,4,6,8])