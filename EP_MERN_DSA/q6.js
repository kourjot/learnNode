var majorityElement = function(nums) {
    let map={}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]]++
        }else{
            map[nums[i]]=1
        }
    }
    let max=0
    let maxfeq=0
    for(let key in map){
        if(maxfeq<map[key]){
            maxfeq=map[key]
            max=key
        }
    }
    return Number(max)
};