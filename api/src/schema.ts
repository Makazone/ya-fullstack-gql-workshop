import { gql } from "apollo-server";

export default gql`
  type Movie {
    id: ID!
    title: String!
    similarMovies(limit: Int! = 1): [Movie!]!
  }

  type User {
    id: ID!
    image: String
    subscription: UserSubscriptionEnum!
  }

  enum UserSubscriptionEnum {
    YA_PLUS
    NONE
  }

  type Viewer {
    me: User!
  }

  type Query {
    movie(id: ID!): Movie
    viewer: Viewer
  }
`;
