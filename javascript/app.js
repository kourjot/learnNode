let promise=new Promise((resolve,reject)=>{
    let x=true
    if(x){
        resolve("Promise Resolved")
        console.log("true")
    }
    else{
        reject("Promise Rejectd")
        console.log("false")
    }
})
promise.then((res)=>console.log(res)).catch((err)=>console.log(err))