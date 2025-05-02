let arr=[
    "react",
    { tags: ["js", "frontend", "react"] },
    { tags: ["frontend", "css"] },
    "css",
    { tags: ["react", "js"] }
  ]
  let obj={}
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i]=="string"){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]]=1
        }
    }    
    else{
        for(let j=0;j<arr[i].tags.length;j++){
           if(obj[arr[i].tags[j]]){
            obj[arr[i].tags[j]]++
           }else{
            obj[arr[i].tags[j]]=1
           }
        }
    }
  }
let max=-Infinity
let kay=""
for(let key in obj){
    if(max<obj[key]){
        max=obj[key]
        kay=key
    }
}
console.log(kay);