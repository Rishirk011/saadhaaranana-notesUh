import { Router } from "express";
import { categories } from "../controllers/categoriesController.js";
import protect from "../middlewares/authMiddleware.js";

const categoryRoutes = Router();

categoryRoutes.get('/',protect,categories);

export default categoryRoutes;