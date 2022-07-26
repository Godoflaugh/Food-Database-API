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
    },
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
    img: {
      data: Buffer,
      contentType: String
    },
    likes: [
      type: Schema.Types.ObjectId,
      ref: "User"
    ],
    comments: [
      {
        commentBody: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        }
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)

recipeSchema
  .virtual('likes')
  //getter
  .get(function () {
    return this.likes.length
  })

const Recipe = model('recipe', recipeSchema)
module.exports = Recipe