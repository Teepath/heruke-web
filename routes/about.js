var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about', {title: 'Who we are'})
});

router.get('/about_director', function(req, res, next) {
  res.render('director', {title: 'About Director'})
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'})
});

module.exports = router;
