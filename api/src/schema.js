const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    owner: User!
  }

  input PetsInput {
    type: String
    name: String
  }

  input PetInput {
    id: ID!
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Query {
    pet(input: PetInput): Pet
    pets(input: PetsInput): [Pet]!
  }

  type Mutation {
    newPet(input: NewPetInput): Pet!
  }
`;

module.exports = typeDefs;
