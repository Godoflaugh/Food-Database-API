const { gql } = require('apollo-server-express')
const { Recipe, User } = require('../models')
const { GraphQLDateTime } = require('graphql-iso-date')

const customScalarResolver = {
  Date: GraphQLDateTime
}

const resolvers = {
  Query: {
    string: async () => {
      return 'hello'
    },
    recipe: async () => {
      return Recipe.find({})
    },


    oneUser: async (parent, { username }) => {
      return User.findOne({ username: username })
    },

    allRecipes: async () => {
      return Recipe.find().sort({ createdAt: -1 })
    },

    oneRecipe: async (parent, { recipeName }) => {
      return Recipe.findOne({ recipeName: recipeName })
    },
  },

  Mutation: {
    createUser: async (parent, { username, email }) => {
      return User.create({ username, email })
    },

    createRecipe: async (parent, { recipeName, username, ingredients, cookingTime, instructions, equipment, img }) => {
      return Recipe.create({ recipeName, username, ingredients, cookingTime, instructions, equipment, img })
    },
    addComment: async (parent, { recipeId, commentBody }) => {
      return Recipe.findOneAndUpdate(
        { _id: recipeId },
        { $addToSet: { comments: { commentBody } } },
        { new: true }
      )
    },
    removeComment: async (parent, { recipeId, commentId }) => {
      return Recipe.findOneAndUpdate(
        { _id: recipeId },
        { $pull: { comments: { _id: commentId } } },
        { new: true },
      )
    },
  },
}



module.exports = customScalarResolver, resolvers