const Contact = require("../models/contact-model");
const contactForm = async (req, res) =>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"Contact Message Sent Successfully"});
    } catch (error) {
        return res.status(500).json({message:"Some error occurred"});
    }
}

module.exports = contactForm;