// Given a string s, find the first non-repeating character and return its index. If it doesn't exist, return -1.

let s = "loveleetcode"

// 2

function findString(s){
    let map={}
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]++
        }else{
            map[s[i]]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(map[s[i]]==1){
            console.log(i)
            return
        }
    }
    // console.log(map)
}

findString(s)