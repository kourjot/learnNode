// 🔹 1. Check Subsequence (Simple Version)
// Problem:
// Given two strings A and B, check if B is a subsequence of A. (Characters of B appear in A in the same order, but not necessarily consecutively.)

// Example:

// A = "abcde", B = "ace" → ✅ true

// A = "abcde", B = "aec" → ❌ false
function subSequence(a,b){
    let k=0
    for(let i=0;i<b.length;i++){
        let flag=false
        for(let j=k;j<a.length;j++){
            if(b[i]==a[j]){
                flag=true
                k=j+1
                break
            }
        }
        if(!flag){
            console.log(false)
            return
        }
    }
    console.log(true)
    return 

}

subSequence("abcde","ace")