// let arr= [2, 7, 11, 15 ,2,7]
let k= 9  
function removeDuplicate(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])

        }
    }
    console.log(res)
}
// removeDuplicate([2, 7, 11, 15 ,2,7])
function twoSum(arr,k){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==k){
                console.log(i,j)
                return
            }
        }
    }
}
// twoSum([2, 7, 11, 15],9)
let arr= [-1, 0, 1, 2, -1, -4]
function threeSum(arr){
    res=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k=arr.length;k++){
                if(i!=j || j!=k || k!=i){
                    if(arr[i]+arr[j]+arr[k]==0){
                        res.push(i,j,k)
                    }
                }
            }
        }
    }
    console.log(res)
}

// threeSum( [-1, 0, 1, 2, -1, -4])



// Swap the first and last element of the array.
// Example: [10, 20, 30] → [30, 20, 10]

function swapelement(arr){
    let temp=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=temp
    console.log(arr)
}

swapelement([10, 20, 30])