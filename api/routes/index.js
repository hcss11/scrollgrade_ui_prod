var express = require('express');
var router = express.Router();

var ctrlSignup = require('../controllers/signup.controllers.js');

router
    .route('/signup')
    .post(ctrlSignup.addUser);

module.exports = router;
