var express = require('express');
var router = express.Router();
var Model = require('../models/Customers');

router.get('/', async function(req, res, next) {
  var model = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

router.get('/:n/:k', async function(req, res, next) {
  var model = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  }).skip(parseInt(req.params.n)).limit(parseInt(req.params.k));
});

router.get('/username/:username', async function(req, res, next) {
  var model = Model.find({username:req.params.username}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

router.get('/id/:id', async function(req, res, next) {
  var model = Model.findOne({_id:req.params.id}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

module.exports = router;
