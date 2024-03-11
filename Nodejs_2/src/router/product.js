import express from "express";
import {
  create,
  deletePro,
  getAll,
  getById,
  update,
} from "../controllers/product.js";
const router = express.Router();
router.get("/", getAll);
router.post("/", create);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", deletePro);
export default router;
