const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const api = require('./api')

const app = express()
app.use(express.json())
app.use(morgan('combine'))
app.use(cors())

app.use('/api', api)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + './../dist/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + './../dist/index.html'))
}

const port = process.env.PORT || '5000'
app.listen(port, () => console.log(`Server started on port ${port}`));