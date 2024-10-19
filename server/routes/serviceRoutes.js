import express from "express";
import {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/services", getServices);
router.get("/services/:id", getService);
router.post("/services", createService);
router.patch("/services/:id", updateService);
router.patch("/services/:id", deleteService);

export default router;
