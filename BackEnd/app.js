//dotenv
require("dotenv").config();

//express
const express = require('express')
const app=express();

//step 0 -> http createServer + app confg 
const http = require("http")
const server = http.createServer(app)

// middlware json 
app.use(express.json());


//simple logger
if(process.env.NODE_ENV === "dev"){
    app.use((req,res,next ) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next()  
});
}

//morgan
const morgan = require("morgan")
if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"))
}

//require authRoute
const adminRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const userAuthRoutes = require("./routes/authUser.route");
//route
app.use("/api/dashboard", adminRoutes);
app.use("/api/dashboard/users", userRoutes);
app.use("/api/users", userAuthRoutes);

//create socket
//step 1 -> Init Socket Server -> using server(createServer + app confg) to create io
const {Server} = require("socket.io")
const io = new Server(server,{ 
    //configration Server Node
    cors:{
        origin: "*",
        methods:["GET", "POST"]
    }})

require("./sockets/chat.socket")(io)
//test route
// app.get("/test",(req,res)=>{
//     res.json({msg: "Test Route"})
// })

// port 
const port=process.env.PORT || 3000;

// connection db 
const connectionDB=require("./config/db")
connectionDB()

//only run server 
server.listen(port,()=>{
    console.log(`server runnig on port ${port}`);
 
}); 