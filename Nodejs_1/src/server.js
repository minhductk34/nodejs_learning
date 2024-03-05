import express from "express";
import { connect } from "mongoose";
import router from "./router/index.js";
import dotenv from "dotenv";
dotenv.config();
connect("mongodb://localhost:27017/LearnMongoDB");
// const PORT = process.env.PORT;
// console.log(process.env.PORT);

const PORT = 8000;
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
