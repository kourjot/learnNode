function happyNumber(n){
    let num=new Set()
    while (n!=0){
        let sum=0
        while(n>0){
            let a=n%10
            n=Math.floor(n/10)
            sum+=a*a
        }
        if(sum==1){
            return true
        }
        if(num.has(sum)){
            return false
        }else{
            num.add(sum)
            n=sum
        }
    }
}

console.log(happyNumber(7))