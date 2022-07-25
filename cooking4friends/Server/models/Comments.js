import { Schema, model } from "mongoose"
const dateFormat = require('../utils/dateFormat')

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 250,
      trim: true,
    }
    createAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    }
    reactions: [Reaction],
  },
  {
    toJSOn: {
      virtuals: true,
    },
    id: false,
  }
)

commentSchema
  .virtual('reactionCount')
  //getter
  .get(function () {
    return this.reactions.length
  })

const Comment = model('comment', commentSchema)
module.exports = Comment