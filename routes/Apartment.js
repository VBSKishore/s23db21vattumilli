var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Apartment', { title: 'Search Results Apartment'});
});

module.exports = router;
