// 5. Longest Substring Without Repeating Characters
// 🔹 Input: "abcabcbb"
// 🔸 Output: 3
// (Longest substring is "abc")
let st="abcabcbb"
function findString(st){
    for(let i=0;i<st.length;i++){
        let bag=""
        for(let j=i+1;j<st.length;j++){
            bag+=st[j]
        }
        console.log(bag)
    }
    
}
findString(st)
