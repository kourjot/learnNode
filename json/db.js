

// const input = {
//     name: "Jot",
//     email: "",
//     phone: null,
//     address: "Sri Ganganagar",
//     age: undefined
// };
function cleaning(obj){
    let fq={}
    for(let j in obj){
        for(let i in obj[j]){
        if (obj[i]!==null && 
            obj[i]!==undefined && 
            obj[i]!==""  &&
            obj[i]!=="-" && 
            obj[i]!==N/A
        ) 
        {
            fq[i]=obj[i]
        }
    }
    }
    return fq
}

async function fetData(){
   try{
       const jot=await fetch('https://coderbyte.com/api/challenges/json/json-cleaning')
       const data=(jot.json())
       console.log(data)
       console.log(cleaning(data))
   }catch(err){
    console.log("Error in fetching Data:",err)
   }
}

fetData()
// console.log(cleaning(input))