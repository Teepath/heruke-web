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
router.get('/p2fprojects', function(req, res, next) {
  res.render('p2f', {title: 'P2F'})
});
router.get('/p2fabout', function(req, res, next) {
  res.render('p2fAbout', {title: 'Who We Are'})
});
router.get('/service', function(req, res, next) {
  res.render('service', {title: 'Who is the Service for?'})
});
router.get('/assessment', function(req, res, next) {
  res.render('assessment', {title: 'Assessment'})
});
router.get('/diversity', function(req, res, next) {
  res.render('diversity', {title: 'Diversity & Equality'})
});
router.get('/donation', function(req, res, next) {
  res.render('donation', {title: 'Donation Statemet'})
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', {title: 'Gallery'})
});

module.exports = router;
