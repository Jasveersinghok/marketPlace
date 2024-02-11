import express from "express";
const router = express.Router();

import { requireSignIn, isAdmin } from "../Middleware/authMiddleware.js";
import {
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/orderController.js";

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
