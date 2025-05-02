// Merge Two Sorted Arrays
// Problem: Do sorted arrays diya gaya hai, unhe merge kar ke ek sorted array return karo.

// Example: Input: [1, 3, 5], [2, 4, 6], Output: [1, 2, 3, 4, 5, 6]

function mergeTwoSortedArray(a,b){
    let res=[]
    let i=0
    let j=0
    while (i<a.length && j<b.length){
        if(a[i]<b[j]){
            res.push(a[i])
            i++
        }else{
            res.push(b[j])
            j++
        }
    }
    while (i<a.length){
        res.push(a[i])
        i++
    }
    while(j<b.length){
        res.push(b[j])
        j++
    }
    console.log(res)
}

mergeTwoSortedArray([1, 3, 5], [2, 4, 6])