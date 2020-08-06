import gql from "graphql-tag";

const USERS_QUERY = gql`
  query users {
    users {
      id
      nombre
      apellidos
    }
  }
`;

export default { USERS_QUERY };
