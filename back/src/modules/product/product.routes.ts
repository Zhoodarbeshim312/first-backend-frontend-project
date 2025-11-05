import { Router } from "express";
import productControllers from "./product.controllers";

const router = Router();
router.post("/add", productControllers.addProduct);
router.get("/get", productControllers.getProduct);
router.delete("/delete/:id", productControllers.deleteProduct);
router.patch("/update/:id", productControllers.updateProduct);
export default router;
