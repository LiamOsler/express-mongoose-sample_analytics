var express = require('express');
var router = express.Router();
var Model = require('../models/Transactions');

router.get('/', async function(req, res, next) {
  var test = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

router.get('/account_id/:account_id', async function(req, res, next) {
  var test = Model.findOne({account_id: req.params.account_id}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

module.exports = router;
