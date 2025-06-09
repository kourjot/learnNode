var findDuplicates = function(nums) {
    let map={}
    let res=[]
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            res.push(nums[i])

        }else{
            map[nums[i]]=1
        }
    }
    return res
};