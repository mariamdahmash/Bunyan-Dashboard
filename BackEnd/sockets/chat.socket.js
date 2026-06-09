//AuthMiddleware:
//first require jwt
const jwt  = require("jsonwebtoken")
const socketAuthMiddleware = (socket, next) => {
    try{
        //get token 
        const token = socket.handshake.headers.token
        if(!token) return next(new Error("Not Found Token"))

        //get payload
        const payload = jwt.verify(token, process.env.JWT_SECRET)    
        socket.userId = payload.userId
        socket.role = payload.role
    }catch(err){
        return next(new Error("Invalid Token"))
    }
}

const socketCheckController = (socket, next) => {
    
}