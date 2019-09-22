const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const api = require('./api')
const auth = require('./middlewares/auth')
require('./database')

const app = express()
app.use(express.json())
app.use(morgan('combine'))
app.use(cors())
app.use(auth);

app.use('/api', api)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (_req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || '5000'
app.listen(port, () => console.log(`Server started on port ${port}`));