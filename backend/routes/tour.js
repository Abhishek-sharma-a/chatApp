import express from "express";
const router = express.Router();


import {createTour,getTours,} from "../controllers/tour.js";

router.get("/", getTours);
router.post("/", createTour);

export default router;