import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrdertoPaid,
  updateOrdertoDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect ,admin } from '../middleware/authMiddleWare.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrdertoPaid);
router.route('/:id/deliver').put(protect, admin, updateOrdertoDelivered);

export default router;
