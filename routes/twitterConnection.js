var express = require('express');
var router = express.Router();

var connection_controller = require('../controllers/twitterConnection');

router.get('/tweets', connection_controller.connection_getAll);

module.exports = router;
