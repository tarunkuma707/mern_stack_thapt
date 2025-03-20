const User      =   require("../models/user-model");
const bcrypt    =   require("bcryptjs");
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
        // const saltRound     =   10;
        // const hash_password =   await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({username, email, phone, password});
        res.status(200).json({ msg:userCreated, token: await userCreated.generateToken(), userId :userCreated._id.toString() });   
    }
    catch(error){
        res.status(500).json({ message:error });
    }    
}

//// User Login ////////
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const user = await bcrypt.compare(password, userExist.password);
        if(user){
            res.status(200).json({ msg:"Login Success", token: await userExist.generateToken(), userId :userExist._id.toString() });   
        }
        else{
            res.status(401).json({message:"Invalid Email or Password "})
        }
    } catch (error) {
        res.status(500).json({ message:error });
    }
}

module.exports = { home, register, login }