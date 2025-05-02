// ✅ Q3: Count substrings of length 2
// Input: "hello"
// Output: 4
// Explanation: he, el, ll, lo
let st="hello"
function len2SubString(st){
    for(let i=0;i<st.length;i++){
        let bag=""
        for(let j=i;j<st.length;j++){      
                bag+=st[j]
                if(bag.length==2){
                    console.log(bag)
                }     
        }   
    }
}
len2SubString(st)