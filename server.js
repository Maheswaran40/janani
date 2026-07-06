let express = require("express")
let app = express()

let dotenv=require("dotenv")
dotenv.config() 


let connectDB=require("./config/db")
connectDB()

let cors=require("cors")
app.use(cors())

app.use(express.json())

let route=require("./routes/userRouter")
app.use("/",route)



app.listen(process.env.PORT,()=>console.log("server is running http://localhost:3000"))