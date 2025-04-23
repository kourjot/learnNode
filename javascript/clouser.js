// function outer(){
//     let count=0
//     function inner(){
//         return count++
        
//     }
//     inner()
// }
// const x=outer()

// console.log(x())

// function outer() {
//     let count = 0;
//     return function inner() {
//       count++;
//       console.log(count);
//     }
//   }
  
//   const counter = outer();
//   counter();
//   counter();
//   counter();
  
// 
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
// }
  
  
for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, 1000);
    })(i);
}
         