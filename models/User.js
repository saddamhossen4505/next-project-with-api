import mongoose from "mongoose";

// Create UserSchema.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    cell: {
      type: String,
      default: null
    },
    gender: {
      type: String,
      enum: ["Male", "Female"]
    },
    photo: {
      type: String,
      default: null,
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

// Export UserModel.
export default mongoose.models.User || mongoose.model("User", userSchema);
