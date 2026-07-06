let express=require("express")
const { addData, getData,updateData,deleteData} = require("../Controllers/userController")
let route = express.Router()

route.post("/addUser",addData)
route.get("/getUser",getData)
route.put("/update/:id",updateData)
route.delete("/delete/:id",deleteData)

module.exports=route