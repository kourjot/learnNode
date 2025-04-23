// Input: "listen", "silent"
// Output: true

let s1="listen"
let s2="silent"
function checkAnagram(s1,s2){
    let m=s1.length
    let n=s2.length
    let ss1=s1.split("").sort().join("")
    let ss2=s2.split("").sort().join("")
    console.log(ss1)
    if(m!==n){
        return false
    }
    if(ss1==ss2){
        return true
    }
  
}
console.log(checkAnagram(s1,s2))