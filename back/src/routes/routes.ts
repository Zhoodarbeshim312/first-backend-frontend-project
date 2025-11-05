import { Router } from "express";
import productRoutes from "../modules/product/product.routes";
import cors from "cors";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:3000", "http://192.168.0.105:3000"],
};
globalRouter.use("/product", cors(corsConfig), productRoutes);
export default globalRouter;
