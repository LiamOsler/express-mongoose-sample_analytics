var express = require('express');
var router = express.Router();
var Model = require('../models/Transactions');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var test = Model.find({}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
});

module.exports = router;
