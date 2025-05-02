// Find the Intersection of Two Arrays
// Problem: Do arrays diya gaya hai, unka intersection (common elements) find karo.

// Example: Input: [1, 2, 3, 4], [3, 4, 5, 6], Output: [3, 4]

function IntersectionofTwoArrays(a,b){
    let res=[]
    for(let i=0;i<a.length;i++){
        if(b.includes(a[i])&& !res.includes(a[i])){
            res.push(a[i])
        }
    }
    console.log(res)
}

IntersectionofTwoArrays([1, 2, 3, 4], [3, 4, 5, 6])