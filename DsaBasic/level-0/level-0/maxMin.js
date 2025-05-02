// Find the maximum and minimum element in the array.
// Example: [4, 2, 8, 1] → Max: 8, Min: 1

function findMaxMin(arr){
    let max=-Infinity
    let min =Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }else if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(max,min)
}
findMaxMin( [4, 2, 8, 1])