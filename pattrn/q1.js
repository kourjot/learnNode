// // e.g. 1) input : ABDEF
// // output : GFECB
// // e.g. 2) input : xtD
// // output : Euy
// let str="ABDEF" 

let str = "AYz";
// let str = "xtD";
// console.log(str)
str=str.split("").reverse()
// console.log(str)
let aplh="*abcdefghijklmnopqrstuvwxyz"
let arr=""
for(let i=0;i<str.length;i++){
    let ch=str[i]
    let lowerCh=ch.toLowerCase()
    let idx=aplh.indexOf(lowerCh)
    let newidx=(idx+1)%26
    if(newidx==0){
        newidx=26
    }
    let newch=aplh[newidx]
    if(ch==ch.toUpperCase()){
        arr+=newch.toUpperCase()
    }else{
        arr+=newch
    }
}
console.log(arr)
