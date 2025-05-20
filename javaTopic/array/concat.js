let fruits = ['apple', 'banana'];
let moreFruits = ['orange', 'grape'];

let res=fruits.concat(moreFruits)

// console.log(res)

let currentEmployees = ["Alice", "Bob", "Charlie"];
let newHires = ["Diana", "Eve", "Frank", "Grace"];

let result=currentEmployees.concat(newHires)
while(result.length>5){
    result.shift()
}
console.log(result)