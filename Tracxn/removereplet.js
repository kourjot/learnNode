let str="aaabbaa"
function removeDulpicate(str){
    let bag=""
    for(let i=0;i<str.length;i++){
        if(i==0 || str[i]!==str[i-1]){
            bag+=str[i]
        }
    }
    console.log(bag)
}
removeDulpicate(str)   