function isPalindrome(str){
  let res=""
  for(let i=str.length-1;i>=0;i--){
    res+=str[i]
  }
//   console.log(res)
  if(str==res){
     console.log(true)
  }else{
    console.log(false)
  }
}
isPalindrome("madam")