//dotenv
require("dotenv").config();
//mongoose
const mongoose = require("mongoose")
//admin model
const Admin = require("../models/Admin")
//create new func
const seedSuperAdmin = async() =>{
    try{
        //DB connect
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB is connected")
        //admin exist
        const existAdmin = await Admin.findOne({
            email: process.env.EMAIL_ADMIN
        })
        if(existAdmin) return console.log("Aready Found")

        //create new admin
        const newAdmin = {
            username:"Super Admin",
            email:process.env.EMAIL_ADMIN,
            password:process.env.PASSWORD_ADMIN
        }    
        const admin = await Admin.create(newAdmin)

        console.log(admin)

    }catch(error){
        console.log(error)
    }finally{
        await mongoose.connection.close()
        console.log("DB Closed")
        process.exit(0)
    }
}
//run func
seedSuperAdmin()