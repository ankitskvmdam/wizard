var express = require('express');
var router = express.Router();
var templatePath = "wizard/"

/* GET default page. */
router.get('/', function(req, res, next) {
  res.render(templatePath + 'dashboard');
});

/* GET mine builder dashboard. Currently same as default */
router.get('/dashboard', function(req, res, next) {
  res.render(templatePath + 'dashboard');
});

/* GET individual intermine config. */
/* TODO ADD inidividual mine routing */
router.get('/config', function(req, res, next) {
  res.render(templatePath + 'config');
});

router.get('/upload', function(req, res, next) {
  res.render(templatePath + 'upload');
});

router.get('/supplementary-data', function(req, res, next) {
  res.render(templatePath + 'supplementary');
});

/* Set name, licence, privacy */
router.get('/mine-config', function(req, res, next) {
  res.render(templatePath + 'config');
});

/* Set name, licence, privacy */
router.get('/review', function(req, res, next) {
  res.render(templatePath + 'review');
});




module.exports = router;
