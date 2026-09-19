import { getNotes, addNote, updateNote, deleteNote} from '../controllers/notesController.js';
import { Router } from 'express';
import protect from '../middlewares/authMiddleware.js';

const notesRoutes = Router();

notesRoutes.get('/',protect,getNotes);
notesRoutes.post('/',protect,addNote);
notesRoutes.patch('/:id',protect,updateNote);
notesRoutes.delete('/:id',protect,deleteNote);

export default notesRoutes;