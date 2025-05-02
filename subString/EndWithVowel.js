// ✅ Q5: Print All Substrings of a String That End With a Vowel
// Input: "ace"
// Output:
// a  
// ac  
// ace  
// e
// 🔸 Vowels: a, e, i, o, u
// 🔸 Sirf wahi substrings print karo jo vowel pe end hoti hain
let st="ace"
function EndWithVowel(st){
    let vowel="aeiou"
    for(let i=0;i<st.length;i++){
        let bag=""
        for(let j=i;j<st.length;j++){
            bag+=st[j]
            if(vowel.includes(bag[0])){
                if(vowel.includes(bag[bag.length-1])){
                    
                console.log(bag)
                }
            }
        }
    }
}
EndWithVowel(st)