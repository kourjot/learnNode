import {createClient} from "redis"
const client=createClient()
await client.connect()
await client.set("name","vijay")
const name=await client.get("name")

console.log(name)

db.orders.aggregate([
    {
      $lookup: {
        from: "customers",        
        localField: "customerId", 
        foreignField: "_id",     
        as: "customerDetails"     
      }
    }
  ])
  
