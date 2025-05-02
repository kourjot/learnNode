// Check if two arrays are equal (same elements in same order).
// Example: [1, 2, 3] and [1, 2, 3] → Yes


function arrayTwo(a,b){
    if(a.length!=b.length){
        return "No"
    }
    for(let i=0;i<a.length;i++){
        if(a[i]!=b[i]){
            return "No"
        }
    }
    return "yes"
}

console.log(arrayTwo([1,2,3],[1,2,3]))