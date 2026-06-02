// jwt
const jwt = require("jsonwebtoken")

// verify func

const verify = async (req, res, next) => {
    //catch token
    const authHeader = req.headers.authorization
    //check if token found
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(400).json({msg:"No Token"})
    }    
    //remove Bearer to edit token format
    const token = authHeader.split(" ")[1]

    //verify
    try{
    const payload = jwt.verify(
        token,
        process.env.JWT_SECRET
    )
    // store payload for using later
    req.admin = payload
    next()

    }catch(error){
            res.status(403).json({msg:"Invalid Token"})
    }

}
// export
module.exports = verify