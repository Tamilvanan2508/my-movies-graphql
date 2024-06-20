import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@models/user";
import { generateSecretKey } from "@utils/index";
import { config } from "@utils/config";

const SECRET_KEY = generateSecretKey();
const SALT_ROUNDS = config.saltRounds;

export const authResolver = {
  register: async ({ userInput }: any) => {
    try {
      const { email, password } = userInput;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, String(SALT_ROUNDS));

      // Create new user
      const user = await User.create({
        ...userInput,
        password: hashedPassword,
      });

      return user;
    } catch (error: any) {
      throw new Error(`Failed to register user: ${error.message}`);
    }
  },

  login: async ({ email, password }: any) => {
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      // Compare passwords
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid email or password");
      }

      // Generate JWT token
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

      return { userId: user.id, token };
    } catch (error: any) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  },
};
