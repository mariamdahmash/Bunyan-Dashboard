//dotenv
require("dotenv").config();
//express
const express = require('express')
const app=express();
// middlware json 
app.use(express.json());
// connection db 
//simple logger
if(process.env.NODE_ENV==="dev"){
    app.use((req,res,next )=>{
console.log(`${req.method} ${req.originalUrl}`);
next()  //method (post/get/....)  riginal (/tours)
});
}
//test route
app.get("/test",(req,res)=>{
    res.json({msg: "Test Route"})
})

   
// port 
const port=process.env.PORT || 3000;
const connectionDB=require("./config/db")
connectionDB()
//  run server 
app.listen(port,()=>{
    console.log(`server runnig on port ${port}`);
 
}); 