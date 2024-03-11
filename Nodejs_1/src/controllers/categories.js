import Categories from "../models/Categories.js";
import { categoriesValid } from "../validation/category.js";
export const getAll = async (req, res) => {
  try {
    const categories = await Categories.find();
    // console.log(categories);

    if (categories.length === 0) {
      return res.status(404).json({ message: "Categories not found" });
    }

    return res.status(200).json({ categories: categories });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getById = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ category: category });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const Valid = categoriesValid.validate(req.body);
    const category = await Categories.create(req.body);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ category: category });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { errors_ } = categoriesValid.validate(req.body, {
      abortEarly: false,
    });
    if (errors_) {
      return res.status(400).json({
        message: errors_.detail[0].message,
      });
    }
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: "Categories updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteCate = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Categories deleted",
    });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
