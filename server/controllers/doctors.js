const sequelize=require("sequelize")
const Doctors=require("../database/models/sequelizeSchema")
const bcrypt=require("bcrypt")

const {createTokens}=require("../utils/JWT")

module.exports={
    getAllDoctors:function(req,res){
        Doctors.findAll({}).then(result=>res.json(result)).catch(err=>res.status(500).send(err))
    },
    Register:function(req,res){
        
        const {firstName,lastName,email,specialte,number,location,password}=req.body
        bcrypt.hash(password,10).then(hash=>{
            Doctors.create({firstName,lastName,email,specialte,number,location,password:hash})
            .then((result)=>res.json(result))
            .catch(err=>res.status(400).send(err))
        })
        
    },
    Login:async(req,res)=>{
        const {email,password}=req.body
        const user= await Doctors.findOne({where:{ email:email}})
        if(!user)res.status(400).json({error:"user doesn't exit"})
        bcrypt.compare(password,user.password).then(match=>{
            if(!match){
                res.status(400).json({
                    error:"Wrong Password"
                })
            }else{
                const accessToken = createTokens(user);

                res.cookie("access-token", accessToken, {
                  maxAge: 60 * 60 * 24 * 30 * 1000,
                 
                });
          
                
                res.json(user)
            }
            
        })
        
    },
    profile:(req,res)=>{
        res.json("profile")
    }   
    
}