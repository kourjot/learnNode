// ✅ 2. Compress the String
// Q:
// Input: "aaabbc"
// Output: "a3b2c1"
// Logic: Har character ke baad uska count add karo — frequency ke according compress karna hai.
let str="aaabbc"
function CompresstheString(str){
    let res=""
    let count=1
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i+1]){
            count++
        }else{
            res+=str[i]+count
            count=1
        }
    }
    console.log(res)
}

CompresstheString(str)