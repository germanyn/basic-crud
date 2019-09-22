const mongoose = require('mongoose')
const Schema= require('mongoose').Schema

const database = 'product-catalogs'

const url = process.env.NODE_ENV === 'production'
  ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-r9hsu.mongodb.net/${database}?retryWrites=true&w=majority`
  : `mongodb://localhost:27017/${database}?retryWrites=true&w=majority`

mongoose.connect(url, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function callback () {
  console.log("Database connected");
});