'use strict';

const router = require('express').Router();
const Restaurant = require('../../models/restaurant');
module.exports = router;

// we need to send the restaurants from the database to the client side via the AJAX call
router.get('/', (req, res, next) => {
  Restaurant.findAll()
  .then(res.json.bind(res))
  .catch(next);
});
