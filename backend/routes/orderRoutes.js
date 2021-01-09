import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById, updateOrdertoPaid, getMyOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrdertoPaid);

export default router;
