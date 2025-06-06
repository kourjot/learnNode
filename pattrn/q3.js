// let n = 

// function printSquare(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       if (i === 1) {
        
//         row += j + " ";
//       } else if (i === n) {
        
//         row += (n - j + 1) + " ";
//       } else if (j === 1) {
        
//         row += i + " ";
//       } else if (j === n) {
        
//         row += (n - i + 1) + " ";
//       } else {
       
//         row += "  ";
//       }
//     }
    
//     console.log(row.trim());
//   }
// }

// printSquare(n);




// let n=5
// for(let i=0;i<n;i++){
//   let bag=""
//   for(let j=0;j<n-i-1;j++){
//     bag+=" "
//   }
//   for(let k=0;k<2*i+1;k++){
//     bag+="*"
//   }
//   console.log(bag)
// }

//     *
//    ***
//   *****
//  *******
// *********

// let n=5
// for(let i=0;i<=n;i++){
//   let bag=""
//   for(let j=0;j<=2*n;j++){
//     if(i==j||j==n*2-i){
//       bag+="*"
//     }else{
//       bag+=" "
//     }
//   }

//   console.log(bag)
// }



// *         *
//  *       * 
//   *     *  
//    *   *   
//     * *    
//      *     


// let n=5
// for(let i=0;i<n;i++){
//   let bag=""
//   let m=Math.floor(n/2)
//   for(let j=0;j<n;j++){
//     if(j==0 || j==n-1 ||(i==j && j<=Math.floor(n/2))||(i+j==n-1 && j>=Math.floor(n/2))){
//       bag+="*"
//     }else{
//       bag+=" "
//     }
//   }
//   console.log(bag)
// }
