import express from "express";
import {
  create,
  deleteCate,
  getAll,
  getById,
  update,
} from "../controllers/categories.js";
export const routerCategory = express.Router();
routerCategory.get("/", getAll);
routerCategory.get("/:id", getById);
routerCategory.post("/", create);
routerCategory.put("/:id", update);
routerCategory.delete("/:id", deleteCate);
