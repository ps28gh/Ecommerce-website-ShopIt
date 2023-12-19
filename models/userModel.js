import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        success: true,
      },
      role: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }          // creation time of user will be displayed //
  );

export default mongoose.model('users', userSchema);