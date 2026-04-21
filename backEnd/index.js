import dotenv from 'dotenv';
dotenv.config();   // Load env vars immediately

import express from 'express';
import connectDB from './config/db.js';

import studyRoutes from "./routes/studyRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect DB after env is loaded
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/study", studyRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
