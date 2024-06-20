import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_URI,
  secretKey: process.env.SECRET_KEY,
  saltRounds: process.env.SALT_ROUNDS,
  apiKey: process.env.API_KEY,
  baseURL: process.env.API_BASEURL,
};
