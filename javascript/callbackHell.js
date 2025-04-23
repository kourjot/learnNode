function step1(cb){
    setTimeout(()=>{
        console.log("Step 1 is done ")
    },2000)
}
function step2(cb){
    setTimeout(()=>{
        console.log("Step 2 is done")
        cb()
    },2000)
}

step1(()=>{
    step2(()=>{
        console.log("All task is Done")
    })
})