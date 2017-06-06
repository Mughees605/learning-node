const express = require('express');
const Ninja = require('../models/ninja.js')

const router = express.Router();

router.get('/ninjas', function (req, res) {
    console.log(req.body, "from api")
    res.send({ type: 'GET' })
})

router.post('/ninjas',signUp)

  function signUp(req, res) {
  try {
    const user = Ninja.create(req.body)
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

module.exports = router;