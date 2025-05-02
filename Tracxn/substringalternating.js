// 4. **Substring in Alternating Order**
//     - Determine if String B is a substring of String A in an alternating sequence.
//     - Examples:
//         - Input: A = `abcdef`, B = `bdf` → Output: `true`
//         - Input: A = `abcdef`, B = `bcd` → Output: `false`


function subStringAlternatingOrder(a,b){
    let n=a.length
    let m=b.length
    // for(let k=0;k<n;k++){
    //     if(a[k]==b[0]){
    //         let i=k
    //         let j=0
    //         while (i<n && j<m){
    //             if(a[i]==b[j]){
    //                 j+=1
    //                 i+=2
    //             }else{
    //                 i++
    //             }
    //         }
    //         if(j==m){
    //             console.log(true)
    //             return 
    //         }
    //     }
    // }
    // console.log(false)
    // return

    let i=0
    let j=0
    while(i<n && j<m){
        if(a[i]==b[j]){
            i+=2
            j+=1
        }else{
            i++
        }
    }
   if(j==m){
    console.log(true)
   }else{
    console.log(false)
   }

}

subStringAlternatingOrder("abcdeh", "bdf")