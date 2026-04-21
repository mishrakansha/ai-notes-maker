import { getStudyHistory } from "../services/studyService.js";

export const history = async (req, res) => { 
  try {
    const sessions = await getStudyHistory(req.user._id);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};