import { gql } from "apollo-server-micro";
import user from "./user";

const linkSchema = gql`
  scalar Date

  #directivas para strings
  directive @camelCase on FIELD_DEFINITION
  directive @capitalize on FIELD_DEFINITION
  directive @deburr on FIELD_DEFINITION
  directive @kebabCase on FIELD_DEFINITION
  directive @lowerCase on FIELD_DEFINITION
  directive @lowerFirst on FIELD_DEFINITION
  directive @snakeCase on FIELD_DEFINITION
  directive @toLower on FIELD_DEFINITION
  directive @toUpper on FIELD_DEFINITION
  directive @trim on FIELD_DEFINITION
  directive @upperCase on FIELD_DEFINITION
  directive @upperFirst on FIELD_DEFINITION

  #directivas de autenticacion
  directive @IsAuth on FIELD_DEFINITION
  # directive @isAuthUser on FIELD_DEFINITION

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, user];
