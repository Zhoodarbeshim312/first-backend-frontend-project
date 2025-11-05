import { Request, Response } from "express";
import prisma from "../../config/prisma";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { url, title, price, desc } = req.body;
    const product = await prisma.product.create({
      data: {
        url,
        title,
        price,
        desc,
      },
    });
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addProduct: ${error}`,
    });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findMany();
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getProduct: ${error}`,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteProduct: ${error}`,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { url, title, price, desc } = req.body;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        url,
        title,
        price,
        desc,
      },
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in updateProduct: ${error}`,
    });
  }
};
export default {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
