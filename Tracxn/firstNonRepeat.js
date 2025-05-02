// . Find the First Non-Repeating Character in a String
// Problem: Ek string diya gaya hai, find karo pehla non-repeating character.

// Example: Input: swiss, Output: w

function firstNonRepeating(str){
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            if(str[i]!=str[j]){
                console.log(str[j])
                return 
            }
        }
    }
    let map={}
    for(let i=0;i<str.length;i++){
        if(map[str[i]]){
            map[str[i]]++
        }else{
            map[str[i]]=1
        }
    }
    for(let key in map){
        if(map[key]==1){
            console.log(key)
            return 
        }
    }
}
firstNonRepeating("swiss")