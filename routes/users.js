var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond ');
});

router.get('/cool', function(req, res, next) {
  res.send('u r cool');
});


module.exports = router;
