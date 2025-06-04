var findPeakElement = function(nums) {
    let arr=nums
    if(arr.length==1){
        return 0
    }
    for(let i=0;i<arr.length;i++){
        if(i==0 && arr[i]>arr[i+1]){
            return 0
        }else if(i==arr.length-1 && arr[i]>arr[i-1]){
            return i
        }else {
            if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
                return i
            }
        }
    }
};