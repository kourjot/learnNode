let fruits = ['apple', 'banana', 'orange'];

let res=fruits.pop()
// console.log(fruits)
// console.log(res)

// You have a queue that can hold up to 5 people. When adding a new person to the queue, if there are already 5 people, remove the last person using the pop() method to keep the queue size at 5.

let queue = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let newPerson = "Frank";

if(queue.length>=5){
    queue.pop()
}
queue.push(newPerson)

console.log(queue)
