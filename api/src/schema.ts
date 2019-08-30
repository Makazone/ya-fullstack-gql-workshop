import { gql } from "apollo-server";

export default gql`
  type Movie {
    id: ID!
    title: String!
  }

  type Query {
    movie(id: ID!): Movie
  }
`;
