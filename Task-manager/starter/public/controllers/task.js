import TaskSchema from "../models/Task.js";
export const getAll = async (req, res) => {
  try {
    const items = await TaskSchema.find({});
    if (!items) {
      return res.status(404).json({ message: "Couldn't find items" });
    }
    return res.status(200).json({ items: items });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const create = async (req, res) => {
  try {
    const items = await TaskSchema.create(req.body);
    if (items.length === 0) {
      return res.status(404).json({ message: "can't create item" });
    }
    return res.status(200).json({ items: items });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deletePro = async (req, res) => {
  try {
    const deleteItems = await TaskSchema.findByIdAndDelete(req.params.id);
    if (!deleteItems) {
      return res.status(404).json({ message: "Could delete item" });
    }
    return res.status(200).json({ items: deleteItems });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }

};

export const update = async (req, res) => {
  try {
    const updatedItem = await TaskSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Couldn't update item" });
    }
    return res.status(200).json({ item: updatedItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getByID = async (req, res) => {
  try {
    const item = await TaskSchema.findOne({ _id: req.params.id });
    if (!item) {
      return res.status(404).json({ message: "Couldn't get item" });
    }
    return res.status(200).json({ item });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
