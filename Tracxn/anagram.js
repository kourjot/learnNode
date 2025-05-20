// ✅ 5. Check if Two Strings Are Anagrams
// Q:
// Input: "listen" and "silent"
// Output: True
// Logic: Dono strings ke characters ko sort karke compare karo. Anagram matlab same letters, different order.
let s1="listen"
let s2="silenj"
function isAnagram(s1,s2){
    if(s1.length!=s2.length){
        console.log(false)
        return 
    }
    let ss1=s1.split("").sort().join("")
    let ss2=s2.split("").sort().join("")
    if(ss1!=ss2){
        console.log(false)
        return 
    }else{
    console.log(true)
    }
    // console.log(ss1)
}

isAnagram(s1,s2) 