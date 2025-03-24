const express =  require("express");
const router = express.Router();
const authcontrollers =  require("../controllers/auth-controller");
const signupSchema= require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware")
// router.get("/", (req,res)=>{
//     res.status(200).send("Welcome to our site by router.");
// });

router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema),authcontrollers.register);

router.route("/login").post(authcontrollers.login);

module.exports = router;