let s="abc"
let n=s.length
for(let i=0;i<n;i++){
    let bag=""
    for(let j=i;j<n;j++){
        bag+=s[j]
        console.log(bag)
    }
}