// ✅ 6. Check for Palindrome
// Q:
// Input: "racecar"
// Output: True
// Logic: String ko reverse karke compare karo original se. Agar same hai to palindrome hai.

function isPalindrome(str){
    let bag=''
    for(let i=str.length-1;i>=0;i--){
        bag+=str[i]
    }
    console.log(bag)
    if(bag==str){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isPalindrome("racecar")