let str="I love DSA"
// Output: "DSA love I"

function reverseString1(str){
    let x=str.split(" ")
    let bag=""
    for(let i=x.length-1;i>=0;i--){
        bag+=x[i]+" "
    }
    return bag
}
console.log(reverseString1(str))

// ***************************** Second Way to solve this *********************

function reverseString2(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseString2(str))
