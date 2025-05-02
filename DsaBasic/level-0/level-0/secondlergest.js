// Find the second largest number in the array.
// Example: [4, 1, 3, 2] → Second largest: 3

function secondLargest(arr){
    let max=-Infinity
    let max2=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max2=max
            max=arr[i]
        }else if(arr[i]>max2 && arr[i]<max){
            max2=arr[i]
        }
    }
    console.log(max2)
}
secondLargest([4, 1, 3, 2])