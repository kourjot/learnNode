import redis from "ioredis"
const newRedis= new redis()
await newRedis.set("name","jot")
const x=await newRedis.get("name")
console.log(x)