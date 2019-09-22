const { Schema, model } = require('mongoose')

const USER_REF = 'User'

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model(USER_REF, schema)