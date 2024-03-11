import express from "express";
import { connect } from "mongoose";
import router from "./router/index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.URI;
connect(URI);
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
