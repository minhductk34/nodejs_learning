import Product from "../models/Product.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ message: "Product find success", data: products });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ message: "Product find success", data: product });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Couldn't create product" });
    }
    return res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.body.id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Couldn't update product" });
    }
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deletePro = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Couldn delete product" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
