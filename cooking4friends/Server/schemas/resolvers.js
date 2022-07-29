const { gql } = require('apollo-server-express')
const { Recipe, User } = require('../models')
const { GraphQLDateTime } = require('graphql-iso-date')

const { signToken } = require('../utils/auth')

// const customScalarResolver = {
//   Date: GraphQLDateTime
// }

const resolvers = {
  Query: {

    users: async () => {
      console.log("hi")
      return await User.find().sort({ createdAt: -1 })
    },

    user: async (parent, { username }) => {
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
    // createUser: async (parent, { username, email }) => {
    //   return User.create({ username, email })
    // },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
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



module.exports = resolvers

// customScalarResolver,