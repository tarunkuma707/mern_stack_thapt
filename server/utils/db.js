const mongoose = require("mongoose");
const URI       =   process.env.MONGO_DB_URI;
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