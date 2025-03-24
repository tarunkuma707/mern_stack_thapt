const { sign } = require("jsonwebtoken");
const {z}  = require("zod");
const signupSchema = z.object({
    username: z.string({required_error: "User Name is required"}).trim().min(3,{message: "Name must be 3 characters"}).max(255,{message: "Name should not above 255 characters long"}),
    username: z.string({required_error: "Email is required"}).trim().email({message: "Email is required"}),
    phone: z.string({required_error:"Phone Number is required"}).trim().min(10,{message:"Phone must be at least 10 character long"}).max(20,{message:"Phone number cannot be more than 20 character long"}),
    password: z.string({required_error:"Password is required"}).trim().min(7,{message:"Password should be at least 7 characters long"}).max(10,{message:"Password cannot be 10 characters long"}),
});

module.exports = signupSchema;
