import mongoose, { Schema, model } from "mongoose";
import { User } from "./user.model";
const complaintSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // cloudinary
    },
    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const complaint = model("Complaint", complaintSchema);
