const { gql } = require('apollo-server-express')

const typeDefs = gql`
 type Recipe {
   _id: ID!
   recipeName: String!
   username: String!
   ingredients: String!
   cookingTime: Number!
   createdAt: Date
   instructions: String!
   equipment: String!
 }

type User {
  _id: ID
  username: String
  email: String
  friends: []
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
  comments: [Comment!]!

}

type Query {
  #Query to find all users, and a query to find one user
  allUsers: [User]!
  oneUser: (userId: ID!): User


  #Query to find all recipes and a query to find one recipe
  allRecipes: [Recipe]!
  oneRecipe: (recipeID: ID!) Recipe

  #Query to find all comments based on the recipe they were commented on
}

type Mutation {
  createUser(username: String!, email: String!): User
  updateUser(username: String!): User
  createRecipe(recipeName: String!, username: String!, ingredients: String!, cookingTime: String!, instructions: String!, equipment: String!, img: String): Recipe
  addComment(commentBody: String!, username: String!): Comment
  removeComment(commentId: ID!): Comment
}
`
module.exports = typeDefs