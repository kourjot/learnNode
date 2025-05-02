// 4
// 2 5 0 9

function avgOfAll(n,arr){
    let sum=0
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    console.log(sum/n)
}

avgOfAll(4,[2, 5, 0, 9])