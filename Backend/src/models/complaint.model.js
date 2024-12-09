import mongoose, { Schema, model } from "mongoose";
const complaintSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const complaint = model("Complaints", complaintSchema);
