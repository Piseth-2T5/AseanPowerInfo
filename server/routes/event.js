import express from 'express';
import { addEvent, deleteEvent, getEvent, updateEvent } from '../controller/event.js';
import auth  from '../middleware/auth.js';
const router = express.Router();

router.get('/', getEvent);
router.post('/',auth, addEvent);
router.patch('/:id',auth, updateEvent);
router.delete('/:id',auth, deleteEvent);



export default router;

