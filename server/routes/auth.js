import express from "express";
const authRouter = express.Router();

// Controllers
import {
  login,
  register,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";

authRouter.post("/register", register);

authRouter.post("/login", login);
authRouter.post("/forgotpassword", forgotPassword);

authRouter.put("/passwordreset/:resetToken", resetPassword);

export default authRouter;
