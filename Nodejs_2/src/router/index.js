import express from "express";
import routerProduct from "./product.js";
const router = express.Router();
router.use("/products", routerProduct);

export default router;
