// Check if the array is sorted in ascending order.
// Example: [1, 2, 3] → Yes | [3, 2, 1]` → No
function isSorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            console.log("No")
            return 

        }
    }
    
        console.log("yes")
    
}

isSorted( [3,1 ,3] )