import { gql } from "apollo-server";

export default gql`
  # What's it going to be?
  type Query {
    hello: String!
  }
`;
