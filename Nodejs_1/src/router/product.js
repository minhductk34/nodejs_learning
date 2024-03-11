import express from "express";
import {
  create,
  deletePro,
  getAll,
  getById,
  update,
} from "../controllers/product.js";
import { checkPermission } from "../middleware/checkPermission.js";


const router = express.Router();
router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deletePro);


export default router;
