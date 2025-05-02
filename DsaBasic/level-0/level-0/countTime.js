// Count the frequency of each element.
// Example: [1, 2, 2, 3, 1] → 1:2, 2:2, 3:1


function frequecyCount(arr){
    let map={}
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }else{
            map[arr[i]]=1
        }
    }
    console.log(map)
}
frequecyCount([1, 2, 2, 3, 1] )