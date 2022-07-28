const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const imgSchema = new Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  }
})
const Image = model('image', imgSchema)
module.exports = Image