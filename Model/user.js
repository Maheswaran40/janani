const mongoose=require("mongoose")
let userData=mongoose.Schema({
    userName:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    }
})

let userSchema=mongoose.model("userDetail",userData)
module.exports=userSchema