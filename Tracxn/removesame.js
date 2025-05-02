// ✅ 1. Remove All Adjacent Duplicates in String
// Q:
// Input: "abbaca"
// Output: "ca"
// Logic: Jab bhi koi 2 same characters ek sath ho (aa, bb), unko hata do. Ye process tab tak repeat karo jab tak string stable na ho jaye.

// let str="abbaca"
// function AdjacentDuplicates(str){
//     let flag=true
//     while(true){
//         flag=false
//         let bag=""
//         for(let i=0;i<str.length;i++){
//             if(i<str.length-1 &&  str[i]==str[i+1]){
//                 flag=true
//                 i++
//             }else{
//                 bag+=str[i]
//             }
//         }
//         str=bag

//         console.log(str)
//     }

   
// }
let str = "abbaca";

function AdjacentDuplicates(str) {
    let flag = true;
    while (true) {
        flag = false;
        let bag = "";
        for (let i = 0; i < str.length; i++) {
            if (i < str.length - 1 && str[i] == str[i + 1]) {
                flag = true;
                i++ 
            } else {
                bag += str[i];
            }
        }
        str = bag;
        if (!flag) break; 
    }
    console.log(str);
}
AdjacentDuplicates(str); 