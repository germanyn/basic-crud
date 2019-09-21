const { Router } = require('express')

const router = Router()

router.post('/login', (req, res) => {
  res.send({token: 'sucesso'})
})

router.get('/products', (req, res) => {
  res.send([])
})

module.exports = router