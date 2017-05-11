'use strict';

const router = require('express').Router();
const Activity = require('../../models/activity');
module.exports = router;


router.get('/', (req, res, next) => {
  Activity.findAll()
  .then(res.json.bind(res))
  .catch(next);
});
