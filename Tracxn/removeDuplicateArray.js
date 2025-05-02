// 5. Remove Duplicates from an Array
// Problem: Ek array diya gaya hai, duplicate values ko remove karna hai aur unique elements ka array return karna hai.

// Example: Input: [1, 2, 3, 2, 4, 1], Output: [1, 2, 3, 4]

function removeDuplicatesInArray(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    console.log(res)
}
removeDuplicatesInArray([1, 2, 3, 2, 4, 1])