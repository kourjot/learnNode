// Check if the array is a palindrome.
// Example: [1, 2, 3, 2, 1] → Yes

function palindrome(arr){
    let res=[]
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    if(arr.join("")==res.join("")){
        console.log("yes")
    }else{
        console.log("NO")
    }
}

palindrome( [1, 2, 3, 2])