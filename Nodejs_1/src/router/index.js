import express from "express";
import routerProducts from "./product.js";
import routerAuth from "./auth.js";
import { routerCategory } from "./categories.js";
const router = express.Router();
router.use("/product", routerProducts);
router.use("/auth", routerAuth);
router.use("/category", routerCategory);
export default router;
