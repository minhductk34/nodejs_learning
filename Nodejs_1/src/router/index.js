import express from "express";
import routerProducts from "./product.js";
const router = express.Router();
router.use("/product", routerProducts);
export default router;
