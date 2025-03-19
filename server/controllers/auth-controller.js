//////
/*** 
 * Home Logic
 * ***/

const home = async(req, res) =>{
    try{
        console
        res.status(200).send("Welcome to the home page by router");
    }
    catch(error){
    
    }
}

const register = async (req,res) => {
    try{
        console.log(req.body);
        res.status(200).json({ message:req.body });
    }
    catch(error){
        res.status(400).json({ message:error });
    }    
}

module.exports = { home, register }