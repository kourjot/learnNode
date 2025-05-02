// ✅ Q4: Print Substrings that are Palindromes
// Input: "aba"
// Output:
// a  
// b  
// a  
// aba
// Note: Palindrome = same from front and back
let st="aba"
function  palindrome(bag){
    let s=0
        let e=bag.length-1
        while(s<e){
            if(bag[s]!=bag[e]){
                return false
            }
            s++
            e--
        }
        return true
}
function palindromeSubString(st){
    for(let i=0;i<st.length;i++){
        let bag=""
        for(let j=i;j<st.length;j++){
            bag+=st[j]
            if(palindrome(bag)){
               
                console.log(bag)
            }  
        }
        
    }
}
palindromeSubString(st)