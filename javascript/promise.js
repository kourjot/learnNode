// let promise=new Promise((resolve,reject)=>{
//     let x=false
//     if(x){
//         resolve("fullfiled")
//     }
//     else{
//         reject("fail")
//     }
// })
// promise.then((data)=>{console.log("promise is resolve")}).catch((err)=>{console.log("promise is rejected")})

// let p = new Promise((resolve, reject) => {
//     resolve("done");
//   });
  
//   p.then((res) => {
//     console.log("1:", res);
//   });
  
//   console.log("2: Hello");

// let p = new Promise((resolve, reject) => {
//     reject("error");
//   });
  
//   p.then((res) => {
//     console.log("Success:", res);
//   }).catch((err) => {
//     console.log("Fail:", err);
//   });
  
// let p = new Promise((resolve, reject) => {
//     resolve("Welcome");
//   });
  
//   p.then((res) => {
//     console.log(res);
//     return "Again";
//   }).then((data) => {
//     console.log(data);
//   });
  
// let p = new Promise((resolve, reject) => {
//     resolve("OK");
//     reject("Not OK");
//   });
  
//   p.then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });
  
let p = new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
  
  p.then((res) => {
    console.log("Resolved:", res);
  });
  
  console.log("After promise");
  