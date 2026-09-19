import { Router } from "express";
import userRoutes from "./userRoutes.js";
import notesRoutes from "./notesRoutes.js";


const routes = Router();

routes.use('/users',userRoutes);
routes.use('/notes',notesRoutes);

export default routes;