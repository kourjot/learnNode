// 🔸 4. Group All Anagrams Together
// 🔹 Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 🔸 Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
let arr=["eat", "tea", "tan", "ate", "nat", "bat"]
function groupAnagram(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let ch=arr[i]
        let sortCh=ch.split("").sort().join("")
        let flag=false
        for(let j=0;j<res.length;j++){
            if(res[j][0].split("").sort().join("")==sortCh){
                res[j].push(ch)
                flag=true
                break
            }
        }
        if(!flag){
            res.push([ch])
        }
    }
    return res
}
console.log(groupAnagram(arr))