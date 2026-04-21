import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import studyRoutes from "./routes/studyRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use("/api/auth", authRoutes);
app.use("/api/study", studyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
