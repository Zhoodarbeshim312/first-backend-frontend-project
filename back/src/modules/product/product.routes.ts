import { Router } from "express";
import productControllers from "./product.controllers";

const router = Router();
router.post("/add", productControllers.addProduct);
router.get("/get", productControllers.getProduct);
export default router;
