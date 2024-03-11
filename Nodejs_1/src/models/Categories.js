import mongoose, { Schema } from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "UnknownCategory",
  },
  slug: {
    type: String,
    required: true,
    default: "UnknownCategory",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
},{
    versionKey:false,
    timestamps:true,
});
export default mongoose.model("Categories", productSchema)