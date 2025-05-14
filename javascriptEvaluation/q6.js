
// 1. Remove the last 4 fruits from the end of the array.
// 2. Add the removed fruits to the beginning of the array
// in the same order they were removed.

const fruits = ["Apple", "Banana", "Orange", "Mango", 
"Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

// console.log(rearrangeFruits(fruits));


// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple",
// "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

function rearrangeFruits(arr){
  let res=arr.splice(-4)
  arr.unshift(...res)
  console.log(arr)
}
rearrangeFruits(fruits)