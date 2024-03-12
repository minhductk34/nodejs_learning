import dotenv from "dotenv";

import connectDB from "./db/connect";
import { deleteMany, create } from "./models/product";

import jsonProducts from "./products.json";
dotenv.config();
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await deleteMany();
    await create(jsonProducts);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
