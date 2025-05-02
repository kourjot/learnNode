// 3. Find the Character with Maximum Frequency
// 🔹 Input: "aabbbccccd"
// 🔸 Output: 'c'
// (‘c’ occurs 4 times)
let st="aabbbbbccccd"
function findMaxFq(st){
    let map={}
    for(let i=0;i<st.length;i++){
        if(map[st[i]]){
            map[st[i]]++
        }else{
            map[st[i]]=1
        }
    }
    let max=0
    let maxch=""
    for(let key in map){
        if(map[key]>max){
            max=map[key]
            maxch=key
        }
    }
    return maxch
}

console.log(findMaxFq(st))