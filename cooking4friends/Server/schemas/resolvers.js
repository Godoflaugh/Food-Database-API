const { gql } = require('apollo-server-express')
const 
const resolvers = {
  Query: {
    string: async () => {
      return 'hello'
    },
    recipe: async () => {
      return Recipe.find({})
    }
  }



}

module.exports = resolvers