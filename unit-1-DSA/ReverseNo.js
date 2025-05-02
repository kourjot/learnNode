let num=971
function reverseTheValue(num){
    let res=0
    while(num>0){
        let a=a%10
        res=res*10+a
        num=Math.floor(num/10)
    }
    console.log(res)
}
reverseTheValue(num)

// output=179