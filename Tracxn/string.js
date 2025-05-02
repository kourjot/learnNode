let str = "*-+*-+*+"
let k = 3

function getweight(str,k){
    let weight=0
    for( let i=0;i<str.length;i++){
        if(str[i]==="*"){
            weight+=5
        }else if(str[i]==="-"){
            weight+=3
        }
        else if(str[i]==="+"){
            weight+=1
        }
    }
    console.log(weight)
}

function customCompare(a,b){
    const weightA=getweight(a)
    const weightB=getweight(b)
    if(weightA!==weightB){
        return weightB-weightA
    }
    const priority={"*":0,"-":1,"+":2}
    for(let i=0;i<length;i++){
        if(a[i]!=ab[i]){
            return 
        }
    }
}
getweight(str,k)