import mongoose from "mongoose";
import { config } from "@utils/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI ?? "");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
