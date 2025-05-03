// Find the second smallest and second largest element.

function secondMinMax(arr){
    let min1=Infinity
    let min2=Infinity
    let max1=-Infinity
    let max2=-Infinity
    let min3=Infinity
    let min4 =Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max2=max1
            max1=arr[i]
        }else if(arr[i]>max2 && arr[i]<max1){
            max2=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min1){
            min4=min3
            min3=min2
            min2=min1
            min1=arr[i]
        }else if (arr[i]>min1 && arr[i]<min2){
            min4=min3
            min3=min2
            min2=arr[i]
        }else if(arr[i]>min2 && arr[i]<min3){
            min4=min3
            min3=arr[i]
        }else if (arr[i]>min3 && arr[i]<min4){
            min4=arr[i]
        }
    }
    console.log(min4,max2)
}

secondMinMax([1,2,7,9,3])