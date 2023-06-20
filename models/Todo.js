import mongoose from "mongoose";

// Create TodoSchema.
const todoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export TodoModels.
export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
