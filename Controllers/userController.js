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
// const updateData = (req, res) => {

// }


// delete
// const deleteData = (req, res) => {

// }


module.exports={addData,getData}