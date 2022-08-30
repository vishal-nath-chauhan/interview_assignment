import { Router } from "express";
import cityController from "../controllers/city.controller.js";

const router = Router();

router.route('/').post(cityController.addCity).delete(cityController.removeCity).get(cityController.getCity);
router.route("/update").patch(cityController.updateCity);

export default router;
