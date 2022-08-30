import { Router } from "express";
import employeeController from "../controllers/employee.controller.js";

const router = Router();

router.route("/").post(employeeController.addEmployee).delete(employeeController.removeEmployee).get(employeeController.getEmployee);
router.route("/update").patch(employeeController.updateEmployee);

export default router;
