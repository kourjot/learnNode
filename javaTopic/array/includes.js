let numbers = [10, 20, 30, 40, 50];

let res=numbers.includes(30)
// console.log(res)
let values = [5, 15, 25, 35, 45];
function findele(n){
    let res=values.includes(n)
    if(res){
        console.log(true)
    }else{
        console.log(false)
    }
}
findele(35)
findele(10)