// @ts-check

const { Router } = require('express')
const Product = require('./models/ProductModel')
const User = require('./models/UserModel')
const checkAuth = require('./shareds/checkAuth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('express-async-errors')

const router = Router()

const generateToken = (credentials) => jwt.sign(
  credentials,
  'somesupersecretkey',
  {
    // expiresIn: '1h'
  }
)

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user =  await User.findOne({ username });
  if (!user) {
    throw new Error('User does not exist!');
  }
  // @ts-ignore
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw new Error('Password is incorrect!');
  }
  res.send(generateToken({ userId: user.id, username }));
})

router.post('/register', async (req, res) => {
  const input = req.body
  const existingUser = await User.findOne({ username: input.username });
  if (existingUser) {
    throw new Error('User already exists.');
  }
  const hashedPassword = await bcrypt.hash(input.password, 12);

  const user = await User.create({
    ...input,
    password: hashedPassword
  });

  res.send(generateToken({ userId: user.id, username: input.username }));
})

router.get('/products', async (req, res) => {
  const userId = checkAuth(req)
  const data = await Product.find({
    ownerId: userId,
  })
  res.send(data.map(product=>product.toObject()))
})

router.get('/products/:id', async (req, res) => {
  checkAuth(req)
  const data = await Product.findById(req.params.id)
  res.send(data.toObject())
})

router.post('/products', async (req, res) => {
  checkAuth(req)
  const userId = checkAuth(req)

  const lastSequenceProduct = await Product.findOne({
    ownerId: userId,
  }).sort('-sequence').exec()

  // @ts-ignore
  const sequence = lastSequenceProduct && lastSequenceProduct.sequence
    // @ts-ignore
    ? lastSequenceProduct.sequence + 1
    : 1

  const data = await Product.create({
    ownerId: userId,
    ...req.body,
    sequence,
  })
  res.send(data.toObject())
})

router.put('/products/:id', async (req, res) => {
  checkAuth(req)
  const data = await Product.findByIdAndUpdate(req.params.id, req.body)
  res.send(data.toObject())
})

router.delete('/products/:id', async (req, res) => {
  checkAuth(req)
  const { id } = req.params
  const data = await Product.findByIdAndDelete(id)
  res.send(data.toObject())
})

router.use((err, req, res, next) => {
  if (err.message === 'access denied') {
    res.status(403);
    res.send(err.message);
  } else {
    res.status(500);
    res.send(err.message);
  }
 
  next(err);
});

module.exports = router