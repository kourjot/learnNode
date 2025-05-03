// Sort the array without using built-in functions.
// (Use Bubble Sort / Selection Sort)
function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
}

sortArray([2,4,6,1,0,9])