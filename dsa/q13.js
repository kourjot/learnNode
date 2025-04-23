// 9. **Question:** Check if two strings are anagrams of each other.
    
//     **Input:** `"listen"` and `"silent"`
    
//     **Expected Output:** `true`

let s1="listen"
let  s2="silen"
// function Anagrams(s1,s2){
//     let n=s1.length
//     let m=s2.length
//     if (m!=n){
//         return false
//     }
//     let ss1=s1.split("").sort().join("")
//     let ss2=s2.split("").sort().join("")
//     if (ss1===ss2){
//         return true
//     }else{
//         return false
//     }
   
// }
// console.log(Anagrams(s1,s2))

function checkAnagram(s1,s2){
    if (s1.length!=s2.length){
        return false
    }
    let fq={}
    for (let i=0;i<s1.length;i++){
        ch=s1[i]
        if(fq[s1[i]]){
            fq[s1[i]]++
        }else{
            fq[s1[i]]=1
        }
    }
    for(let i=0;i<s2.length;i++){
        ch=s2[i]
        if(!fq[ch]){
            return false
        }
        fq[ch]--
    }
    return true
}
console.log(checkAnagram(s1,s2))