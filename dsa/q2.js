let str="abbc"
let st=[]
let fq={}
for(let i=0;i<str.length;i++){
    if(fq[str[i]]){
        fq[str[i]]+=1
    }
    else{
        fq[str[i]]=1
        st.push(str[i])
    }
}
let i =0
while(st.length>0){
    let ch;
    if (i<st.length){
        ch=st[i]
        i++
    }
    if(fq[ch]==1){
        console.log(ch)
        return 
    }
}
console.log("-1")

