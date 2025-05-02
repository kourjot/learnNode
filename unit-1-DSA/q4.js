function reverseTheValue(num) {
    // Write code here
    let s=String(num)
    let res=""
    for(let i=0;i<s.length;i++){
        res+=s[i]
    }
    console.log(res)
}
reverseTheValue(197)
