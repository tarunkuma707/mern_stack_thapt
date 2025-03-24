require("dotenv").config();
const express = require("express");
const app = express();
const router = require('./router/auth-router');
const connectDb = require("./utils/db");
const errorMiddlware = require("./middlewares/error-middlware");
app.use(express.json());
app.use("/api/auth",router);
app.use(errorMiddlware);

// app.get("/",(req,res) =>{
//     res.status(200).send("Welcome to home");
// });

// app.get("/register",(req,res) =>{
//     res.status(200).send("Regiser here");
// });

const PORT = 5000;
connectDb().then(()=>{
    console.log("Data Base connected promise");
    app.listen(PORT,()=>{
        console.log(`Server is running at port : ${PORT}`);
    });
})