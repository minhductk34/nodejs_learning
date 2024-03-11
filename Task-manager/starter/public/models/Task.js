import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provine name"],
    trim: true,
    maxlenght: [20, "must be greater than 20"],
  },
  compelete: {
    type: Boolean,
    required: false,
  },
});
export default mongoose.model("TaskSchema", TaskSchema);
