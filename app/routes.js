//requirements
var express = require('express');
var path = require('path');

//create and export server obj
var router = express.Router();
module.exports = router;

//import route functions
var siteController =      require('./controllers/site.controller');
var dashboardController = require('./controllers/dashboard.controller');

//Route protoypes
/*site routes*/
router.get('/', siteController.homePage);
router.get('/about', siteController.aboutPage);
router.get('/contact', siteController.contactPage);
router.post('/contact', siteController.contactPost);
router.get('/@:username', siteController.homeParams);
/*dashboard router*/
router.get('/dashboard', dashboardController.dashView);
/*show 404*/
router.use(siteController.show404);
