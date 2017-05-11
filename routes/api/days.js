// POST /api/days/:id/restaurants

'use strict';

const router = require('express').Router();
const Day = require('../../models/day');
module.exports = router;

// GET ALL DAYS
router.get('/', (req, res, next) => {
  Day.findAll()
  .then(res.json.bind(res))
  .catch(next);
});

router.post('/', (req, res, next) => {
  res.send("You created a day!");
});




// router.get('/:id/', (req, res, next) => {

// });

// router.get('/:id/:attraction', (req, res, next) => {

// });

// // SEND SPECFIC DAY
// router.post('/:id/', (req, res, next) => {
//   Day.findAll()
//   .then(res.json.bind(res))
//   .catch(next);
// });


// // SEND SPECFIC DAY AND ATTRACTION
// router.post('/:id/:attraction', (req, res, next) => {
//   Day.findAll()
//   .then(res.json.bind(res))
//   .catch(next);
// });

// // ADD A DAY
// router.get('/add', (req,res, next) => {

// })


// // EDIT A DAY
// router.get('/:id/edit', (req, res, next) => {

// })

// router.get('/:id/:attraction/edit', (req, res, next) => {

// })

// // DELETE A DAY
// router.get('/:id/delete', (req, res, next) => {

// })

// router.get('/:id/:attraction/delete', (req, res, next) => {

// })
