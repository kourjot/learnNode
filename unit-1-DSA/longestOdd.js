// 12
// 1 1 1 1 2 2 2 2 2 1 1 1
function longestOddNumber(n,arr){
    let max=0
    let count=1
    for(let i=1;i<n;i++){
        if(arr[i]==arr[i-1]){
            count++
        }else{
            if(arr[i-1]%2!=0){
                if(count>max){
                    max=count
                }
            }
            count=1
        }
    }
    console.log(max)

}

longestOddNumber(12,[1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1])