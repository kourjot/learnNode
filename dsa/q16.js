// 10. **Question:** Remove all duplicate characters from a string, preserving first occurrences.
    
//     **Input:** `"programming"`
    
//     **Expected Output:** `"progamin"`

let str="programming"
let n=str.length
let bag=""
let i=0
let j=n-1
for(let i=0;i<str.length;i++){
    if(!bag.includes(str[i])){
        bag+=str[i]
    }
}
console.log(bag)
