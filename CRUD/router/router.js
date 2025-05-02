import {Router} from "express"
import {authToken} from "../middlewere/auth.js"
import {singIn,login } from "../controller/user.js"
import {taskCreate, getTask} from "../controller/task.js"
const router=Router()
router.post("/sing-In",singIn)
router.post("/log-In",login )
router.post("/Create-Task",authToken,taskCreate)
router.get("/Get-Task",authToken ,getTask)
export {router}
