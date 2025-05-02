str="The quick brown fox jumps over the lazy dog"
function checkPanagram(str){
    let set =new Set()
    for(let i=0;i<str.length;i++){
        let ch=str[i].toLowerCase()
        if(ch>="a" && ch<="z"){
            set.add(ch)
        }
    }
    if(set.size==26){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

checkPanagram(str)