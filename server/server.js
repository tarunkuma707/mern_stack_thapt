require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDb = require("./utils/db");
const errorMiddlware = require("./middlewares/error-middlware");
const corsOptions = {
    origin: "http://localhost:5173",
    methods :"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
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