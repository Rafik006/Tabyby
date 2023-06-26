const sequelize=require("sequelize")
const {Clients}=require("../database/models/sequelizeSchema")


module.exports={
    addClients:function(req,res){
        const {firstName,lastName,email,birthday}=req.body
        Clients.create({firstName,lastName,email,birthday,password:"",doctors_doctorsId:req.params.doctorId})
        .then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).send(err))
    },
    getClients:function(req,res){
        Clients.findAll({where:{
            doctors_doctorsId:req.params.id
        }}).then(result=>res.status(201).json(result))
        .catch(err=>res.status(500).send(err))
    }
}