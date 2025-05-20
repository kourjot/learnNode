let numbers = [10, 20, 30, 40, 50];
let idx=numbers.indexOf(5)
// console.log(idx)

let values = [5, 15, 25, 35, 45];

function findIDX(n){
    let res=values.indexOf(n)
    if(res===-1){
        console.log("Number Not found")
    }else{
        console.log(res)
    }
}
findIDX(15)
findIDX(12)