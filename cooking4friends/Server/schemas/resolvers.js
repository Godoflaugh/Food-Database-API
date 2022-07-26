
const { Recipe, User } = require('../models')

const resolvers = {
  Query: {
    allUsers: async () => {
      return User.find().sort({ createdAt: -1 })
    },


    oneUser: async (parent, { username }) => {
      return User.findOne({ username: username })
    },

    allRecipes: async () => {
      return Recipe.find().sort({ createdAt: -1 })
    },

    oneRecipe: async (parent, { recipeName }) => {
      return Recipe.findOne({ recipeName: recipeName })
    }

  }

  Mutation: {
    createUser: async (parent, { username, email }) => {
      return User.create({ username, email })
    },
    updateUser: async (parent, { username }) => {
      return User.findOneAndUpdate(
        { username: username },
        {},
        {},
      )
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
        { new: true }
      )
    }
  }
}



module.exports = resolvers