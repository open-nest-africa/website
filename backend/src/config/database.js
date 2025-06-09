const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI 
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
  //process.exit(1);
};

module.exports = connectDB;
