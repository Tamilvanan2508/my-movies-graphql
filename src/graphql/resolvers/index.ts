import { authResolver } from "./auth";
import { userResolver } from "./users";

const rootResolver = { ...authResolver, ...userResolver };

export default rootResolver;
