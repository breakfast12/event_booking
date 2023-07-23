const router = require('express').Router();
const HelloWorldController = require('../controllers/HelloWorldController');

router.get('/', HelloWorldController.helloWord);

module.exports = router;
