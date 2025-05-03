// Find the number that appears only once (others appear twice).
// Example: [2, 3, 5, 4, 5, 3, 4] → 2


function findNumber(arr){
    let map={}
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }else{
            map[arr[i]]=1
        }
    }
    for(let key in map){
        // console.log(map[key])
        if(map[key]==1){
            console.log(key)
        }
    }
}

findNumber([2, 3, 5, 4, 5, 3, 4])