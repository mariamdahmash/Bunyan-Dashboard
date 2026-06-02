//dotenv
require("dotenv").config();

//express
const express = require('express')
const app=express();

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
const loginAdmin = require("./routes/auth.route")
//route
app.use("/api/dashboard",loginAdmin)

//test route
// app.get("/test",(req,res)=>{
//     res.json({msg: "Test Route"})
// })


// port 
const port=process.env.PORT || 3000;

// connection db 
const connectionDB=require("./config/db")
connectionDB()

//run server 
app.listen(port,()=>{
    console.log(`server runnig on port ${port}`);
 
}); 