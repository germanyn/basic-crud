const { Schema, model } = require('mongoose')

const PRODUCT_REF = 'Product'

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: String,
  ownerId: {
    type: String,
    required: true,
  },
  sequence: Number,
})

// Duplicate the ID field.
schema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true
});

// Ensure virtual fields are serialised.
schema.set('toObject', {
  virtuals: true
});


module.exports = model(PRODUCT_REF, schema)