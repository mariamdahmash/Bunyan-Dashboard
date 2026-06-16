//Admin model
const Admin = require("../models/Admin")
//joi schema
const loginSchema = require("./validation/authAdminValidation")
//jwt
const jwt = require("jsonwebtoken")


//login func
const login = async(req, res) => {
    try{
        //Error Handelling
        const{error,value} = loginSchema.validate(req.body,{
            abortEarly: false,
            stripUnknown: true
        })
        if(error) return res.status(400).json({
            msg: error.details.map((err) => err.message)
        })
// ------------------------------ Logic ------------------------------
        // get data from front
        const {email, password} = value
        //Find Admin
        const admin = await Admin.findOne({email}).select("+password")
        if(!admin){
            return res.status(400).json({msg:"Invalid Email Or Password"})
        }
        //compare password
        const vaildPassword = await admin.comparePassword(password)
        if(!vaildPassword){
            return res.status(400).json({msg:"Invalid Email Or Password"})
        }
        //Toooken
        const token = jwt.sign({id: admin._id, role:"admin"},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.status(200).json({msg:"Success Login", token})
    } catch(error){

    }
}
//export
module.exports = {
    login
}