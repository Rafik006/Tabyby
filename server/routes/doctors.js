const express=require("express")
const router=express.Router()
const {validateToken}=require("../utils/JWT")
const {getAllDoctors, Register,Login,profile}=require("../controllers/doctors")

router.post("/login",Login)
router.post("/register",Register)
router.get("/profile",validateToken,profile)

router.get("/getAllDoctors",getAllDoctors)
// router.post("/addDoctor",addDoctor)


module.exports=router