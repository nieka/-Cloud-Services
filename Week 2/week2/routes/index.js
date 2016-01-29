var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*Get hello world page*/
router.get('/helloworld', function(req, res, next) {
  res.render('index', { title: 'Hello world!' });
});
module.exports = router;
