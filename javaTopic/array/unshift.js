let fruits = ['apple', 'banana'];

fruits.unshift("kiwi")

// Define the initial queue and VIP customers
let queue = ["Charlie", "Diana", "Eve", "Frank", "Grace"];
let vipCustomers = ["Alice", "Bob"];
for(let i=0;i<vipCustomers.length;i++){
    queue.unshift(vipCustomers[i])
}

while(queue.length>5){
    queue.pop()
}
console.log(queue)