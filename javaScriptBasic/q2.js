let map={
    HR: { Q1: 50000, Q2: 70000 },
    Tech: { Q1: 150000, Q2: 130000 },
    Sales: { Q1: 80000, Q2: 85000 }
}
  

for(let key in map){
    let sum=0
    sum+=map[key].Q1
    sum+=map[key].Q2
    map[key]=sum
    

}
let res=[]
    for(let key in map){
        if(map[key]>=150000){
            res.push(key)
        }
    }
console.log(res)
  