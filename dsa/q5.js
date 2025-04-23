let arr=[1, 2, 4, 5]
// Output: 3
function findNumber(arr){
    let n=arr.length+1
   
    let total=(n*(n+1))/2
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        
    }
    return total-sum
}
console.log(findNumber(arr))