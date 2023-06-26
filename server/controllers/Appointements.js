const sequelize=require("sequelize")
const {Appointment}=require("../database/models/sequelizeSchema")



module.exports={
    addAppointement:function(req,res){
        const {patientName,appointmentDate,appointmentTime,reason }=req.body
        Appointment.create({patientName,appointmentDate,appointmentTime,reason,doctorId:req.params.id})
        .then(()=>res.status(201).json("created"))
        .catch((err)=>console.log("err"))

    },
    getAll:function(req,res){
        Appointment.findAll({where:{doctorId:req.params.id}})
        .then(()=>res.status(201).json("success"))
        .catch((err)=>console.log("err"))
        
    },
    deleteAppointement:function(req,res){
        Appointment.destroy({where:{
            id:req.params.id
        }})
        .then(()=>res.status(201).json("success"))
        .catch((err)=>console.log("err"))
    }
}