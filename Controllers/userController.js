let userSchema = require("../Model/user")

// create
const addData = async (req, res) => {


    try {
        let user = userSchema({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })

        await user.save()
        res.status(200).send("data added")
        console.log("data added successfully");

    }
    catch (err) {
        console.log("data adding error", err.message);
        res.status(404).send(err.message)
    }
    finally {
        console.log("addData function closed");
    }


}

// read
const getData = async(req, res) => {
    try {

        let user = await userSchema.find()
        res.status(200).send(user)
        console.log("successfully get the data");
    }
    catch (err) {
        console.log("get function error", err.message);
        res.status(404).send(err.message)
    }
    finally {
        console.log("getFunction function closed");
    }
}

// update
const updateData =async (req, res) => {
try{
    let user= await userSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).send(user)
}
catch(err){
     console.log("update function error", err.message);
     res.status(404).send("update error")
}
finally{
    
       console.log("update function closed");
}
}


// delete
const deleteData =async (req, res) => {
try{
 let user= await userSchema.findByIdAndDelete(req.params.id)
 res.status(200).send("data deleted successfully")
}
catch(err){
console.log("delete function error",err.message);
}
finally{
    console.log("delete function closed");
}
}


module.exports={addData,getData,updateData,deleteData}