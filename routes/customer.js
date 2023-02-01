var express = require('express');
var router = express.Router();
var Model = require('../models/Customers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var test = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

/* GET users listing. */
router.get('/username/:username', async function(req, res, next) {
  var test = Model.find({username:req.params.username}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

/* GET users listing. */
router.get('/id/:id', async function(req, res, next) {
  var test = Model.findOne({id:req.params.id}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

module.exports = router;
