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

 type Query {
  recipe: [Recipe]
 }
`

module.exports = typeDefs