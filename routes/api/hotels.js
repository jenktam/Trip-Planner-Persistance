'use strict';

const router = require('express').Router();
const Hotel = require('../../models/hotel');
module.exports = router;

router.get('/', (req, res, next) => {
  Hotel.findAll()
  .then(res.json.bind(res))
  .catch(next);
});
