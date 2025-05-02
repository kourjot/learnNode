import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  task: { type: String, required: true ,unique:true}, 
  status: {
    type: String,
    enum: ["complete", "in-progress"],
    default: "in-progress",               
  },
});

const Task = model("Task", taskSchema);     

export { Task };
