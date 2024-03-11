import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minlenght: 3,
    },
    price: {
      type: Number,
      require: true,
      minlenght: 3,
    },
    description: { type: String },
    categoriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
