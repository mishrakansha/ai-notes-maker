import StudySession from "../models/studySession.js";

export const getStudyHistory = async (userId) => {
  return await StudySession.find({ userId }).sort({
    createdAt: -1
  }).limit(10);
}