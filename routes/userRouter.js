let express=require("express")
const { addData, getData } = require("../Controllers/userController")
let route = express.Router()

route.post("/addUser",addData)
route.get("/getUser",getData)

module.exports=route