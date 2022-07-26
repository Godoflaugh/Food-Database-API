import { Schema, model } from "mongoose"
const dateFormat = require('../utils/dateFormat')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "You need to have a username",
      minlength: 1,
      maxlength: 20,
      trim: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      unique: true,
    },
    email: {
      type: String,
      required: "You need to have an email",
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      unique: true,
    },

    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comments"
    //   },
    // ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    toJson: {
      virtuals: true,
    }
  }
)

userSchema
  .virtual('friendCount')
  //getter
  .get(function () {
    return this.friends.length
  })

const User = model('user', userSchema)


module.exports = User