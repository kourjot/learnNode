// Count the number of positive, negative, and zero elements.
// Example: [2, -1, 0, -3, 5] → Positive: 2, Negative: 2, Zero: 1

function countTheNumber(arr){
    let positive=0
    let negative=0
    let zero=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            zero++
        }else if(arr[i]>=1){
            positive++
        }else if(arr[i]<0){
            negative++
        }
    }
    console.log(`p:${positive} | n:${negative} | z :${zero}`)
}

countTheNumber([2, -1, 0, -3, 5])