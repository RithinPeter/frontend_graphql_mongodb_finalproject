import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
      user {
        id
        username
        role
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!, $role: String!) {
    signUp(username: $username, password: $password, role: $role) {
      token
      user {
        id
        username
        role
      }
    }
  }
`;