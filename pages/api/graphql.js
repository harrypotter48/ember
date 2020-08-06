import { ApolloServer } from "apollo-server-micro";
import apollo from "../../apollo";

const apolloServer = new ApolloServer({
  schema: apollo,
  context(ctx) {
    return ctx;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
