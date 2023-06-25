const express=require("express")
const sequelize=require("./database/config")
const cookieParser=require("cookie-parser")
const cors=require("cors")

const db=require("./database/models/sequelizeSchema")

const doctorRoutes=require("./routes/doctors")

const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
const PORT=3001


app.use("/thedoctor",doctorRoutes)
db.sync().then(()=>{
    console.log("database connected ")
    
}).catch((err)=>console.log(err))

// sequelize.authenticate().then(()=>{
//     console.log("connection has been established successfully ")
    
// }).catch((err)=>console.error("unable to connect to the database :",err))

app.listen(PORT,()=>{
    console.log("server listening on port "+ PORT)
})