import Product from "../models/product.js";
import { productValid } from "../validation/product.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({ message: "ok", data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({ message: "ok", data: product });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const create = async (req, res) => {
  try {
    const Valid = productValid.validate(req.body);
    console.log(Valid);
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({
        message: "Couldn't create product",
      });
    }
    return res.status(200).json({ message: "ok", data: product });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { errors } = productValid.validate(req.body, {
      abortEarly: false,
    });
    if (errors) {
      return res.status(400).json({ message: errors.details[0].message });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ message: "Couldn't find and update product" });
    }
    return res
      .status(200)
      .json({ message: "Product updated successfully", data: product });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deletePro = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Couldn't find and delete product" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
