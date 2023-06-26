const express=require("express")
const router=express.Router()
const {validateToken}=require("../utils/JWT")
const {getAllDoctors, Register,Login,}=require("../controllers/doctors")
const {addClients,getClients}=require("../controllers/clients")
const {addAppointement,getAll,deleteAppointement}=require ("../controllers/Appointements")

router.post("/login",Login)
router.post("/register",Register)
router.post("/addClients/:doctorId",addClients)
// router.get("/profile",validateToken,profile)
router.get("/getAllClients/:id",getClients)


router.post("/addAppointment",addAppointement)
router.get("/getAllAppointment/:id",getAll)
router.delete("/deleteAppointment/:id",deleteAppointement)


module.exports=router