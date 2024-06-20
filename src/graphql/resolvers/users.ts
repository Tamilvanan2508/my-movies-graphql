import User from "@models/user";

export const userResolver = {
  getUserById: async ({ userId }: any) => {
    try {
      // Find user by id
      const user = await User.findOne({ _id: userId });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error: any) {
      throw new Error(`Failed to get user: ${error.message}`);
    }
  },
};
