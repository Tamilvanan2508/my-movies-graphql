import dotenv from "dotenv";

dotenv.config();

export const config = {
  secretKey: process.env.SECRET_KEY,
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_URI,
};
