let str="Run 45 steps, then Jump 30 STEPS, finally run 25 Steps!"
str=str.split(" ")
let obj={}
for(let i=0;i<str.length;i++){
    str[i]=str[i].toLowerCase()
    if(str[i]==="run" || str[i]==="jump"){
        if(obj[str[i]]){
            obj[str[i]]=obj[str[i]]+parseInt(str[i+1])
        }else{
            obj[str[i]]=parseInt(str[i+1])
        }
    }
}
console.log(obj);