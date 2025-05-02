// ✅ Q2: Print All Substrings That Start With Vowel
// Input: "abcde"
// Output:

// css
// Copy
// Edit
// a  
// ab  
// abc  
// abcd  
// abcde  
// e
// Explanation: Start vowel se ho (a, e, i, o, u) → toh "a..." aur "e" valid h
let st= "abcde"
function vowelSubString(st){
    let vowel="aeiou"
    for(let i=0;i<st.length;i++){
        if(vowel.includes(st[i])){
            let bag=""
            for(let j=i;j<st.length;j++){
                bag+=st[j]
                console.log(bag)
            }
           
        }
    }
}
vowelSubString(st)
