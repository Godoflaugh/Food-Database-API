import { Schema, model } from "mongoose"
const dateFormat = require('../utils/dateFormat')

const recipeSchema = new Schema(
  {

    recipeName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    username: {
      type: String,
      required: true,
      //* This needs to relate to a user that exists.
      ref: "user"
    }
    ingredients: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    instructions: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    comments: [Comments],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)

//*Do we need to create a thumbsup schema? It's not referring to anything in the current set up
recipeSchema
  .virtual('thumbsup')
  //getter
  .get(function () {
    return this.thumbsup.length
  })

const Recipe = model('recipe', recipeSchema)
module.exports = Recipe