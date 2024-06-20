import { authResolver } from "./auth";
import { userResolver } from "./users";
import { movieResolver } from "./movies";

const rootResolver = { ...authResolver, ...userResolver, ...movieResolver };

export default rootResolver;
