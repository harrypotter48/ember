import { makeExecutableSchema } from "graphql-tools";
import schema from "./schema";
import resolvers from "./resolvers";
import {
  camelCase,
  capitalize,
  deburr,
  kebabCase,
  lowerCase,
  lowerFirst,
  snakeCase,
  toLower,
  toUpper,
  trim,
  upperCase,
  upperFirst,
  IsAuth,
} from "./directives";

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  schemaDirectives: {
    //strings directives
    camelCase,
    capitalize,
    deburr,
    kebabCase,
    lowerCase,
    lowerFirst,
    snakeCase,
    toLower,
    toUpper,
    trim,
    upperCase,
    upperFirst,

    //auth directives
    IsAuth,
  },
  logger: {
    log: (e) => {
      console.log("logger \n");
      console.log(e);
    },
  },
});
