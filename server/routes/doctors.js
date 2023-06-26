const express=require("express")
const router=express.Router()
const {validateToken}=require("../utils/JWT")
const {getAllDoctors, Register,Login,profile}=require("../controllers/doctors")
const {addClients,getClients}=require("../controllers/clients")

router.post("/login",Login)
router.post("/register",Register)
router.post("/addClients/:doctorId",addClients)
router.get("/profile",validateToken,profile)
router.get("/getAllClients/:id",getClients)

router.get("/getAllDoctors",getAllDoctors)

// router.post("/addDoctor",addDoctor)


module.exports=router