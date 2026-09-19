import { registerUser, loginUser, getMe } from "../controllers/userController.js";
import { Router } from "express";
import protect from "../middlewares/authMiddleware.js";

const userRoutes = Router();

userRoutes.post('/register',registerUser);
userRoutes.post('/login',protect,loginUser);
userRoutes.get('/me',protect,getMe);

export default userRoutes;