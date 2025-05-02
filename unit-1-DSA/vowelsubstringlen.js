function stringPrime(N , str){
    let count=0
    for(let i=0;i<N;i++){
        let bag=""
        for(let j=i;j<N;j++){
            bag+=str[j]
            if(primeLength(bag.length)){
                    count++
            }
            
        }
    }
    console.log(count)
    
}


function primeLength(num){
    if(num<=1){
        return false
    }
    let i=2
    while(i<num){
        if(num%i==0){
            return false
        }
        i++
    }
    return true
}

stringPrime(3 ,"abc")