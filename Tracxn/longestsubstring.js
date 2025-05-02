// ✅ 4. Longest Substring Without Repeating Characters
// Q:
// Input: "abcabcbb"
// Output: "abc" (length = 3)
// Logic: Aisi longest substring nikaalni hai jisme koi character repeat na ho.
let str="abcabcbb"
function longestsubString(str){
    let max=0
    let long=""
    for(let i=0;i<str.length;i++){
        let bag=""
        for(let j=i;j<str.length;j++){
            if(bag.includes(str[j])){
                break
            }else{
            bag+=str[j]
            if(bag.length>max){
                max=bag.length
                long=bag
            }
            }
            
        }
    }
    console.log(long)
}

longestsubString(str)