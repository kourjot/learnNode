// Move all zeros to the end of the array.
// Example: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0


function moveZero(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            j++
        }
    }
    console.log(arr)
}

moveZero([0, 1, 0, 3, 12])