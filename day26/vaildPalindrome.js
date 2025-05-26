var isPalindrome = function(s) {
    clean=""
    bag=""
    n=s.length
    for(let i=0;i<n;i++){
        let char=s[i].toLowerCase()
        if((char>="a" && char <="z") ||(char>="0" && char<="9")){
            clean+=char
        }
    }
    m=clean.length
    for(let i=m-1;i>=0;i--){
        bag+=clean[i]
    }
    if(bag==clean){
        return true
    }else{
        return false
    }
};