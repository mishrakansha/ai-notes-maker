import { registerUser, loginUser} from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.json(data);
  }
  catch (error) {
    res.status(400).json({ error: error.message || "Registration Failed" });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.json(data);
  }
  catch (error) {
    res.status(400).json({
      error: error.message || "Login failed"
    });
  }
}