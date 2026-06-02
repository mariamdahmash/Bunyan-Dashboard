//require joi 
const joi = require("joi")
//joi schema
const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
})
//Export
module.exports = loginSchema