const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String!
    email: String !
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
