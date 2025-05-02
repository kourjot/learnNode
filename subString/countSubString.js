// ✅ Q1: Count All Substrings of a String
// Input: "abcd"
// Output: 10
// Explanation: All substrings:
// a, ab, abc, abcd, b, bc, bcd, c, cd, d → total 10

// 👉 Task: Sirf substrings count karni hai, print nahi.

let st="abcd"
function countSubString(st){
    let count=0
    for(let i=0;i<st.length;i++){
        let bag=""
        
        for(let j=i;j<st.length;j++){
            bag+=st[j]
            count++
        }
    }
    console.log(count)
}
countSubString(st)