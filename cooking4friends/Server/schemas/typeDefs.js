const { gql } = require('apollo-server-express')
const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date')

const typeDefs = gql`
scalar Date


type User {
  _id: ID
  username: String
  email: String
}

type Recipe {
  _id: ID
  recipeName: String
  username: String
  ingredients: String
  cookingTime: String
  instructions: String
  equipment: String
  img: String
  comments: [comments]!

}

type comments {
  _id: ID
  commentBody: String!
  createAt: Date!
  username: String!
}

type Query {
  allUsers: [User]!
  oneUser (userId: ID!): User
  allRecipes: [Recipe]!
  oneRecipe (recipeID: ID!): Recipe

}

type Mutation {
  createUser(username: String!, email: String!): User
  updateUser(username: String!): User
  createRecipe(recipeName: String!, username: String!, ingredients: String!, cookingTime: String!, instructions: String!, equipment: String!, img: String): Recipe
  addComment(commentBody: String!, username: String!): comments
  removeComment(commentId: ID!): comments
}

`
module.exports = typeDefs