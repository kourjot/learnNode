
var isValid = function(s) {

        let st=[]
        for(let i=0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{"||s[i]=="["){
            st.push(s[i])
        }else{
            if(st.length==0){
            return false
            }
            let top=st[st.length-1]
            if(s[i]==")" && top!=="(" || s[i]=="]" && top!=="[" || s[i]=="}"&& top!=="{"){
            return false
            }
            st.pop()
        }
        }
        return st.length==0
}