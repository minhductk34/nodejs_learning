import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const URI = process.env.URI
const connectionString = URI;

const connectToDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString)

      .then(() => {
        console.log("Connected to the database...");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });
   
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

export default connectToDatabase;
