let a=3
let b=15
let k=3
function solve(a,b,k){
    let sum=0
    
    while (a<=b){
        if(a%k==0){
            sum+=a
            a++
        }
        a++
    }
    console.log(sum)
}
solve(a,b,k)