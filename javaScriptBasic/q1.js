// Given an array of student objects with name and marks (array of numbers), return a new array of student names sorted in descending order of their total marks.

// op=["Diya", "Aarav", "Kabir"]
let arr=[
    { name: "Aarav", marks: [88, 76, 92] },
    { name: "Diya", marks: [99, 91, 85] },
    { name: "Kabir", marks: [72, 89, 68] }
]

function solve(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let std=arr[i]
        let sum=0
        for(let j=0;j<std.marks.length;j++){
            sum+=std.marks[j]
        }
        res.push({name:std.name,marks:sum})
    }
    let x=res.sort((a,b)=>b.marks -a.marks)
    let op=[]
    for(let i=0;i<x.length;i++){
        op.push(res[i].name)
        
    }
    console.log(op)
}

solve(arr)