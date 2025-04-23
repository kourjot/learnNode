

function  sortedData(obj){
    if(Array.isArray(obj)){
        return obj.map(sortedData)
    }else if (typeof obj=="object" && obj!==null){
        let sortedobj={}
       let keys =Object.keys(obj).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
       for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        sortedobj[key] =  sortedData(obj[key]);  
    }
    return sortedobj;
    }
    return obj
}

function fetData(){
    fetch("https://coderbyte.com/api/challenges/json/json-cleaning").then((res)=>res.json()).then((data)=>{
        const result=sortedData(data)
        console.log(JSON.stringify(result,null,2))
    }).catch((err)=>{
        console.log("Error fetching data:", err)
    })
}
fetData()


// ************************************************

function operation(obj){
    for(let key in obj){
        if(typeof obj[key]=="object"){
            if (Array.isArray(obj[key])) {
                let arr=[]
                for (let i = 0; i < obj[key].length; i++) {
                    if (obj[key][i] !== "" && obj[key][i] !== "N/A" && obj[key][i] !== "-") {
                        arr.push(obj[key][i]);  
                    }
                }
                obj[key]=arr
               
            }else{
                for(let n in obj[key]){
                    if(obj[key][n]==""||obj[key][n]=="N/A"||obj[key][n]=="-"){
                        delete obj[key][n]
                    }
                }
            }
        }
        else if(typeof obj[key]=="string" ||typeof obj[key]=="number"){
            if(obj[key]==""||obj[key]=="N/A"||obj[key]=="-"){
                delete obj[key]
            }
        }
    }
    console.log(obj);
}

function fet(){
   
    fetch("https://coderbyte.com/api/challenges/json/json-cleaning").then((data)=>data.json()).then((r)=>operation(r))
}
fet() 