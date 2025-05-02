function stringVowels(N,str){
    //Write code here
    let vowel="aeiou"
    let count=0
    for(let i=0;i<N;i++){
        let bag=""
        for(let j=i;j<N;j++){
            bag+=str[j]
            console.log(bag)
            for(let k=0;k<bag.length;k++){
                if(vowel.includes(bag[k])){
                    count++
                }
            }
           
        }
    }
    console.log(count)
}
stringVowels(3,"abc")


    