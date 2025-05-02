let n=5
function solve(n){
    let even=0
    let odd=0
    while (n>0){
        if(n%2==0){
        even+=n
        n--
        }else{
            odd+=n
            n--
        }
    }
    if(even>odd){
        console.log("even")
    }else{
        console.log("odd")
    }
  
    
}

solve(n)