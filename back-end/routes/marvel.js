const router = require('express').Router();
const marvelController = require('../controllers/marvelController')

router.get('/', marvelController.index);

module.exports = router