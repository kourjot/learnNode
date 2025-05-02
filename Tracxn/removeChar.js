// ✅ 3. Remove Characters That Appear More Than Once
// Q:
// Input: "aabbccde"
// Output: "de"
// Logic: Sirf un characters ko rakhna hai jo sirf ek baar aaye hain.
let str="aabbccde"
function removeChar(str){
    let map={}
    for(let i=0;i<str.length;i++){
        if(map[str[i]]){
            map[str[i]]++
        }else{
            map[str[i]]=1
        }
    }
    let bag=""
    for(let ch in map){
        if(map[ch]==1){
            bag+=ch
        }
    }
    console.log(bag)
}
removeChar(str)