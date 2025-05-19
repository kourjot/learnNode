Array.prototype.mymap=function(cb){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        let temp=cb(this[i],i,this)
        newArr.push(temp)
    }
    return newArr
}

let arr=[1,2,3,4]
let res=arr.mymap((i)=>i*2)
console.log(res)

