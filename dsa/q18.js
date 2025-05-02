let s = "babad"
let max=0
let longest=""
for(let i=0 ;i<s.length;i++){
    for(let j=0;j<s.length;j++){
        let bag=""
        for(let k=i;k<=j;k++){
            bag+=s[k]  
        }
        let flag=true
        let l=0
        let r=bag.length-1
        while(l<r){
            if(bag[l]!=bag[r]){
                flag=false
                break
            }
            l++
            r--
        }
        if(flag  && bag.length>max){
            max=bag.length
            longest=bag
        } 
    }
}
console.log(longest)