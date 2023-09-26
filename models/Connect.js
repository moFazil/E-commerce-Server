const mongoose = require("mongoose");
require('dotenv').config();

const ConnectDB = async()=>{
  try {
   await mongoose.connect(process.env.MONGO_CONNECT,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log("MongoDb Is Connected")
  } catch (error) {
    console.log(error);
  }
}

module.exports=ConnectDB;