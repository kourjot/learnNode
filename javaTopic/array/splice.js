let fruits = ['apple', 'banana', 'orange', 'grape'];
fruits.splice(1,2,"jot","vijay")
// console.log(fruits)

// let fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.splice(1, 2, 'kiwi', 'mango');
// console.log(fruits); 

toDoList = ['task1', 'task2', 'task3', 'task4']
toDoList.splice(1,2,"newTask1","newTask2")
// console.log(toDoList)

let months = ["January", "February", "Monday", "Tuesday"];

// months.splice(2,2,"March","April")

// let months = ["January", "February", "Monday", "Tuesday"];

months.splice(2,0,"March","April")

// console.log(months)

let students = ['Alice', 'Bob', 'Charlie', 'David'];

students.splice(2,0,"Eve")

students.splice(1,1)
students.splice(0,1,"Frank")
console.log(students)