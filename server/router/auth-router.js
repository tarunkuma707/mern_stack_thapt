const express =  require("express");
const router = express.Router();


// router.get("/", (req,res)=>{
//     res.status(200).send("Welcome to our site by router.");
// });

router.route("/").get((req,res)=>{
    res.status(200).send("Welcome to the home page by router");
});

router.route("/register").get((req,res)=>{
    res.status(200).send("Let's Register");
});

module.exports = router;