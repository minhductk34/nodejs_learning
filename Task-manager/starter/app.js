import connectDb from "./public/database/connect.js";
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
import express from "express";
import tasks from "./public/routes/task.js";
connectDb();
const app = express();


// middleware
app.use(express.static('./public'))
app.use(express.json());

app.use("/api/v1/tasks",tasks );

app.listen(PORT, console.log("Server listening on port " + PORT));
