import express from "express";
import { signUP } from "../controllers/dangKiController.js";
import { signIn } from "../controllers/dangNhapController.js";

const userRoutes = express.Router();

userRoutes.post("/register", signUP);
userRoutes.post("/login", signIn)

export default userRoutes