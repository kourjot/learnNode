import {Router} from "express"
import {signIn,login,getprofile,getAdmin,getData} from "./controller.js"
import {auth} from "./auth.js"
import {authrize} from "./role.js"
const router=Router()

router.post("/singIn",signIn)
router.post("/logIn",login)
router.get("/getprofile",auth,getprofile)
router.get("/only-Admin",authrize(["admin"]),getAdmin)
router.get("/getData",getData)

export {router}