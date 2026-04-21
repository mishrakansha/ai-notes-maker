import express from "express";
import { history } from '../controllers/studyController.js';
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/history', protect, history);
export default router;
