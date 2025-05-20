let fruits = ['apple', 'banana', 'orange'];
let res=fruits.shift()
// console.log(res)
// console.log(fruits)

// You have a queue that can hold up to 5 people. When adding a new person to the queue, if there are already 5 people, remove the oldest person from the front using the shift() method to keep the queue size at 5.

let queue = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let newPerson = "Frank";
queue.push(newPerson)
if(queue.length>5){
  queue.shift()
}


console.log(queue)