import { Router } from "express";
import userRoutes from "./userRoutes.js";
import notesRoutes from "./notesRoutes.js";
import categoryRoutes from "./categoryRoutes.js";


const routes = Router();

routes.use('/users',userRoutes);
routes.use('/notes',notesRoutes);
routes.use('/categories',categoryRoutes);

export default routes;