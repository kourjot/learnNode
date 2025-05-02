// Input: "listen", "silent"
// 🔸 Output: True
// (Same characters, different order)
let s1="listej"
let s2="silent"
function solve(s1,s2){
    let n=s1.length
    let m=s2.length
    if(n!=m){
        return false
    }
    let ss1=s1.split("").sort().join("")
    let ss2=s2.split("").sort().join("")
    if(ss1!=ss2){
        return false
    }
    else{
        return true
    }
}
function checkAnagram(s1,s2){
    if(s1.length!=s2.length){
        return false
    }
    let map={}
    for(let i=0;i<s1.length;i++){
        if(map[s1[i]]){
            map[s1[i]]++
        }else{
            map[s1[i]]=1
        }
    }
    for(let i=0;i<s2.length;i++){
        let ch=s2[i]
        if(!map[ch]){
            return false
        }
        map[ch]--
    }
    return true
}
console.log(checkAnagram(s1,s2))


// console.log(solve(s1,s2))