import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import router from "./router/index.js";

dotenv.config();

// const PORT = process.env.PORT;
// const URI = process.env.URI;
const PORT = 8000;
const URI = "mongodb://localhost:27017/LearnNodeJs"

connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();

app.use(express.json());

app.use("/api2", router);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
