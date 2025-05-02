// Merge two arrays into one.
// Example: [1, 2], [3, 4] → [1, 2, 3, 4]

function mergeTwoArray(a,b){
    let i=0
    let j=0
    let res=[]
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){ 
            //  1<2  res=1 i++
            res.push(a[i])
            i++
        }else{
            res.push(b[j])
            j++
        }
    }
    while(i<a.length){
        res.push(a[i])
        i++
    }
    while(j<b.length){
        res.push(b[j])
        j++
    }
    console.log(res)
}

mergeTwoArray([1, 2], [3, 4])