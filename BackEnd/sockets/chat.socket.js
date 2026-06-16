//AuthMiddleware:
//first require jwt
const jwt  = require("jsonwebtoken")
const socketAuthMiddleware = (socket, next) => {
    try{
        //get token 
        const token = socket.handshake.headers.token;
        if(!token) return next(new Error("Not Found Token"))

        //get payload
        const payload = jwt.verify(token, process.env.JWT_SECRET)    
        socket.userId = payload.id
        socket.role = payload.role
        next()
    }catch(err){
        return next(new Error("Invalid Token"))
    }
}

const socketChatController = (io) => {
    //use middleware
    io.use(socketAuthMiddleware)
    //connection socket.io
    io.on("connection", (socket) =>{
        console.log(`User: "${socket.userId}" & Role: "${socket.role}" Is Connection Socket Server`)
        //create room to admin $ user
        if(socket.role === "admin"){
            socket.join("room_admins")
        }else if(socket.role === "user"){
            socket.join(`room_${socket.userId}`)
        }

        //S1 => User Send Problem To Admin
        socket.on("sendMsg",(date)=>{
        io.to("room_admins").emit("receiveMsg",{msg:date.msg,user:socket.userId,})
        })
    })
}

module.exports = socketChatController