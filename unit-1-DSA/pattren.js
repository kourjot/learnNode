// Input: 4
// Output:
// ****
// ****
// ****
// ****
// let n=4
// function SquareofStars(n){
//     for(let i=0;i<n;i++){
//         let bag=""
//         for(let j=0;j<n;j++){
//             bag+="*"
//         }
//         console.log(bag)
//     }
// }
// SquareofStars(n)


// ****************************************************



// Input: 5
// Output:
// *
// **
// ***
// ****
// *****

// let n=5

// function RightAngledTriangle(n){
//     for(let i=0;i<n;i++){
//         let bag=""
//         for(let j=0;j<=i;j++){
//             bag+="*"
//         }
//         console.log(bag)
//     }
// }

// RightAngledTriangle(n)


// *****************************************************

// Input: 4
// Output:
// ****
// ***
// **
// *


// let n=4
// function InvertedRightAngledTriangle(n){
//     for(let i=n-1;i>=0;i--){
//         let bag=""
//         for(let j=0;j<=i;j++){
//             bag+="*"
//         }
//         console.log(bag)
//     }
// }

// InvertedRightAngledTriangle(n)

// *********************************************

// Input: 4
// Output:
// 1
// 12
// 123
// 1234

// let n=4

// function  RightAngledTriangleOfNumbers(n){
//     for(let i=1;i<=n;i++){
//         let bag=""
//         for(let j=1;j<=i;j++){
//             bag+=j
//         }
//         console.log(bag)
//     }
// }

// RightAngledTriangleOfNumbers(n)


// *****************************
// Input: 4
// Output:
// 1
// 22
// 333
// 4444

// let n=4

// function Repeatednumbersintriangle(n){
//     for(let i=1;i<=n;i++){
//         let bag=""
//         for(let j=1;j<=i;j++){
//             bag+=i
//         }
//         console.log(bag)
//     }
// }

// Repeatednumbersintriangle(n)


// ********************************************

// Input: 5
// Output:
// 12345
// 1234
// 123
// 12
// 1

// let n=5
// function  Invertednumbers(n){
//     for(let i=n;i>0;i--){
//         let bag=""
//         for(let j=1;j<=i;j++){
//             bag+=j
//         }
//         console.log(bag)
//     }
// }

// Invertednumbers(n)

// ***********************************************

// Input: 4
// Output:
// ****
// *  *
// *  *
// ****


function HollowSquare(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0  || i==n-1 || j==0 || j==n-1 ){
                bag+="*"
            }
            else{
                   bag+=" "
            }

        }
        console.log(bag)
    }
}

// HollowSquare(4)

// ***********************************************

function LShape(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0 || j==0 ||i==n-1){
                bag+="*"
            }else{
                bag+="  "
            }
        }
        console.log(bag)
    }
}

// LShape(5)

// **************************************************

function UShape(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(j==0 || j==n-1 || i==n-1){
                bag+="*"
            }else{
                bag+="_"
            }
        }
        console.log(bag)
    }
}

// UShape(5)

// ******************************************

function CShape(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
           if(i==0|| i==n-1|| j==n-1){
                bag+="*"
           }else{
            bag+="_"
           }
        }
        console.log(bag)
    }
}

// CShape(5)

// ***********************************


function AShape(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0 || j==0 || j==n-1){
                bag+="*"
            }
            else{
                bag+=" "
            }
        }
        console.log(bag)
    }
}

// AShape(5)

// ***************************************

function solve(n){
    for(let i=n;i>=0;i--){
        let bag=""
        for(let j=0;j<i;j++){
            bag+="* "
        }
        console.log(bag)
    }
}
// solve(5)

// **********************************************************

function solveS(n){
    for(let i=1;i<=n;i++){
        let bag=""
        for(let j=n;j>=1;j--){
            bag+=j+" "
        }
        console.log(bag)
    }
}
// solveS(5)

// ******************************************************************


function binary(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<=i;j++){
            if(j%2==0){
                bag+=1+" "
            }else{
                bag+=0+" "
            }
        }
        console.log(bag)
    }
}

// binary(5)

// *********************************************************

function ZShape(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0 || i==n-1){
                bag+="*"
            }else if(j==n-i-1){
                bag+="*"
            }
            else{
                bag+=" "
            }
        }
        console.log(bag)

    }
}

// ZShape(5)


// ********************************************************

function printArray(n,arr){
   
    for(let i=0; i<n;i++){
       
    
    console.log(arr[i])
    }
}
// printArray(4,[1,2,3,4])


function reverseArray(n,A){
    //write code here
    let bag=[]
    for(let i=n-1;i>=0;i--){
        bag.push(A[i])
    }
    console.log(bag)
}


reverseArray(4,[19,5,26,7])