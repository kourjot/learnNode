// 5. **String Manipulation with Special Characters**
//     - Process a string to apply case transformations based on preceding special characters.
//     - Example: Input: `ab$c%D` → Output: `abCd`

function StringManipulation(str){
    let bag="@#$%^&*"
    let res=""
    for(let i=0;i<str.length;i++){
        if(bag.includes(str[i])){
            if(i+1<str.length){
                if(str[i+1]===str[i+1].toLowerCase()){
                    res+=str[i+1].toUpperCase()
                    i++
                }else if(str[i+1]===str[i+1].toUpperCase()){
                    res+=str[i+1].toLowerCase()
                    i++
                }
            }
        }else{
            res+=str[i]
        }
    }
    console.log(res)
}

StringManipulation("ab$c%D")