const mongoose = require("mongoose");
const URI       =   "mongodb+srv://tarunkuma07:55RaY9CMYJeVMF6d@cluster0.tjt5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongoose.connect(URI);
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected Successfully with your database");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;