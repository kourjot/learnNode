const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

// const result = mergeObjects(obj1, obj2);
// console.log(result);
// Output: { name: "John", age: 40, city: "New York" }

function mergeObjects(obj1, obj2){
  let res={...obj1,...obj2}
  console.log(res)
  
  
}
mergeObjects(obj1, obj2)