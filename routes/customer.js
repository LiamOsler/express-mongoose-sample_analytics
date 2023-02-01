var express = require('express');
var router = express.Router();
var Model = require('../models/Customers');

//Data retrieval routes:

//Route to get all customers
router.get('/', async function(req, res, next) {
  var result = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

//Route to get a range of the customers
router.get('/:n(\\d+)/:k(\\d+)', async function(req, res, next) {
  var result = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  }).skip(parseInt(req.params.n)).limit(parseInt(req.params.k));
});

//Route to get customer usernames
router.get('/username/', async function(req, res, next) {
  var result = Model.find({}, function (err, docs) {
    if(err)  res.send(err);
    if(docs) res.send(docs);
  }).select('username');
});

//Route to get a customer by their specific username
router.get('/username/:username', async function(req, res, next) {
  var result = Model.findOne({username:req.params.username}, function (err, docs) {
    if(err)  res.send(err);
    if(docs) res.send(docs);
  });
});

//Search for a user using their text index
router.get('/search/:query', async function(req, res, next) {
  var result = Model.find({$text: {$search: req.params.query}}, function (err, docs) {
    if(err)  res.send(err);
    if(docs) res.send(docs);
  });
});

//Aggregate statistic routes:
//Route to get total count of customers:
router.get('/count/', async function(req, res, next) {
  var result = Model.countDocuments({}, function (err, count) {
    if (err){
        console.log(err);
    }else{
        console.log("Count :", count);
        res.send({count:count});
    }
  });
});



module.exports = router;
