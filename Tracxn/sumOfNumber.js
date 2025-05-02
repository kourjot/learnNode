// Sum of Digits of a Number
// Problem: Ek number diya gaya hai, uske digits ka sum find karo.

// Example: Input: 123, Output: 6 (1 + 2 + 3)
function sumofString(str){
    let sum=0
    for(let i=0;i<str.length;i++){
        sum+=+str[i]
    }
    console.log(sum)
}
sumofString("123")
function sumOfDigit(n){
    let sum=0
    let str=n.toString()
    console.log(str)
    for(let i=0;i<str.length;i++){
        sum+=+(str[i])
    }
    console.log(sum)

}
// sumOfDigit(123)