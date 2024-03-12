import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();
import express, { json } from "express";
const app = express();

import connectDB from "./db/connect.js";
import productsRouter from "./routes/products.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";

// middleware
app.use(json());

// routes

// app.get('/', (req, res) => {
//   res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
// });

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
