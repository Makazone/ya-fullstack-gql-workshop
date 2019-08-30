import { gql } from "apollo-server";

export default gql`
  type Movie {
    id: ID!
    title: String!
    description: String
    actors: [ActingRole!]!
    directors: [Person!]!
    similarMovies(limit: Int! = 1): [Movie!]!
  }

  type ActingRole {
    id: ID!
    person: Person!
    characterName: String!
  }

  type Person {
    id: ID!
    name: String!
    imageUrl: String
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
