import "module-alias/register";
import express, { Express } from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import graphQlSchema from "@graphql/schema";
import graphQlResolvers from "@graphql/resolvers";
import { connectDB } from "@utils/database";
import { config } from "@utils/config";

const app: Express = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
});
