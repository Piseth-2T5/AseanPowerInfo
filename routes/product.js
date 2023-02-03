import express from 'express';
import { addProduct, deleteProduct, getProduct, updateProduct } from '../controller/product.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getProduct);
router.post('/',auth, addProduct);
router.patch('/:id',auth, updateProduct);
router.delete('/:id',auth, deleteProduct);



export default router;

