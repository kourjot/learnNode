let p1=Promise.resolve("vijay")
let p2=Promise.resolve("jot")
let p3=Promise.resolve("nimar")
Promise.all([p1,p2,p3]).then((data)=>{console.log("All are done",data)}).catch((err)=>{console.log("Any one is fail")})


