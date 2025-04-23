let str="aabbcddex"
function firstNonch(str){
    let fq={}
    for(let i=0;i<str.length;i++){
        if(fq[str[i]]){
            fq[str[i]]++
        }else{
            fq[str[i]]=1
        }
    }
    for(let j=0;j<str.length;j++){
        if(fq[str[j]]==1){
            console.log(str[j])
            return
        }
    }
}

firstNonch(str)

