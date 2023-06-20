import mongoose from "mongoose";

// Create studentSchema.
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roll: {
      type: Number,
      required: true,
    },
    class_: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
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
  {
    timestamps: true,
  }
);

// Export Student models.
export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
