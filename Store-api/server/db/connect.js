import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.URI;
// console.log(URI);
const connectString = URI;
const connect = async () => {
  try {
    await mongoose
      .connect(connectString)
      .then(() => {
        console.log("Connect to the database...");
      })
      .catch((err) => {
        console.log("Error connecting to the database: " + err.message);
      });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connect;
