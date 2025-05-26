let nums = [-1,0,1,2,-1,-4]
function solve(nums){
  let n=nums.length
    let res=[]
    nums.sort((a,b)=> a -b)
    for(let i=0;i<n;i++){
      if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let s=i+1
        let e=n-1
        while(s<e){
            let sum=nums[i]+nums[s]+nums[e]
            if(sum==0){
              res.push([nums[i],nums[s],nums[e]])
              while(s<e && nums[s]===nums[s+1]){
                s++
              }
              while(s<e && nums[e]===nums[e-1]){
                e--
              }
                  s++
                  e--
            }else if(sum>0){
             e--
            }else{
             s++
            }
           
        }
    }
    console.log(res)
}

solve(nums)