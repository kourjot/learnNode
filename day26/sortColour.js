var sortColors = function(nums) {
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if(nums[i]<nums[j]){
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
        }
    }
  } 
  return nums 
};