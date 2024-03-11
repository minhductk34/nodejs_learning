import express from "express";
import {
  create,
  deletePro,
  getAll,
  getByID,
  update,
} from "../controllers/task.js";
const router = express.Router();
router.route("/").get(getAll).post(create);
router.route("/:id").get(getByID).patch(update).delete(deletePro);

export default router;
