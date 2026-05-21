const mongoose=require('mongoose');

const bcrypt= require("bcrypt");
const { required } = require('joi');
const adminSchema=new mongoose.Schema({
username:{
    type: String,
    required:[true,"username is Required"]

},
email:{
    type: String,
    required:[true,"email is Required"]
    
},
password:{
    type: String,
    required:[true,"password is Required"],
    minlength:6,

},

},{timestamps:true})

adminSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);

});

adminSchema.methods.comparePassword= async function (matchPassword) {
  return await bcrypt.compare(matchPassword,this.password) ; 
}
const Admin= mongoose.model("Admin",adminSchema);
module.exports=Admin;