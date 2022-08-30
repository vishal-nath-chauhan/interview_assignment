import { Router } from "express";
import taskController from "../controllers/task.controller.js";

const router = Router();

router.route("/").post(taskController.addTask).delete(taskController.removeTask).get(taskController.getTask);
router.route("/update").patch(taskController.updateTask);

export default router;
