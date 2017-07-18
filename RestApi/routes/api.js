const express = require('express');
const Ninja = require('../models/ninja')

const router = express.Router();

router.get('/ninjas', function (req, res) {
    console.log(req.body, "from api")
    res.send({ type: 'GET' })
})

router.post('/ninjas',signUp)

  function signUp(req, res) {
    console.log('HELLO INSIDE SIGNUP', Ninja)
  try {
    const user = new Ninja.create(req.body)
     console.log('user ',user)
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}

router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT' })
})

router.delete('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE' })
})

router.get('/test', function (req, res) {
    res.send('HELLO WORLD');
})

module.exports = router;