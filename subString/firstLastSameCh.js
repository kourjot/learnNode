// ✅ Q6: Count Substrings Where First and Last Character Are Same
// Input: "abcab"
// Output: 4
// Explanation: Substrings: "a", "b", "c", "aba", "bcb", "abcab"
// Jinme first aur last character same ho: a, b, c, aba
let st="abcab"
function FirstAndLastSame(st){
    let count=0
    for(let i=0;i<st.length;i++){
        let bag=""
        for(let j=i;j<st.length;j++){
            bag+=st[j]
            if(bag[0]==bag[bag.length-1]){
                count++
            }
        }
    }
    console.log(count)
}
FirstAndLastSame(st)