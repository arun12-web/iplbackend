const mongoose = require("mongoose") 
const db_url = "mongodb+srv://garunkumar32:fX0Dm50PS3Ehtxy5@cluster0.7buqxzq.mongodb.net/mydatabase?retryWrites=true&w=majority" 

const db_connection = async()=>{ 
    await mongoose.connect(db_url); 
    console.log("server is connected"); 
};

module.exports = db_connection;