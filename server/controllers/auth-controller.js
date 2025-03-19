const User = require("../models/user-model");
//////
/*** 
 * Home Logic
 * ***/

const home = async(req, res) =>{
    try{
        res.status(200).send("Welcome to the home page by router");
    }
    catch(error){
    
    }
}

const register = async (req,res) => {
    try{
        //console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({msg:"Email Already exists"});
        }
        const userCreated = await User.create({username, email, phone, password });
        res.status(200).json({ msg:userCreated });
        
    }
    catch(error){
        res.status(400).json({ message:error });
    }    
}

module.exports = { home, register }