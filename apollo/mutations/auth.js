import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation login($login: String!, $password: String!) {
    login: signIn(login: $login, password: $password) {
      token
    }
  }
`;

export default { LOGIN_MUTATION };
