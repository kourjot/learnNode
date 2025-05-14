import fs from "fs"
const filepath="./data/tasks.json"

export function readfile(){
    const res=fs.readFileSync(filepath,"utf-8")
    return JSON.parse(res)
}
export function writefile(tasks){
   fs.writeFileSync(filepath,JSON.stringify(tasks,null,2),"utf-8")
}