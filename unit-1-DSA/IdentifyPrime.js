function identifyPrime(num){
    if(num<=1){
        return "No"
    }
    let i=2
    while (i<num){
        if(num%i==0){
            return "No"
        }
        i++
    }
    return "Yes"
}