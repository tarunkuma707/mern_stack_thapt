const express = require("express");
const app = express();
const router = require('./router/auth-router')

app.use("/api/auth",router);

// app.get("/",(req,res) =>{
//     res.status(200).send("Welcome to home");
// });

// app.get("/register",(req,res) =>{
//     res.status(200).send("Regiser here");
// });

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT}`);
});