const router = require('express').Router();
const marvelController = require('../controllers/marvelController')

router.get('/', marvelController.index);

router.get('/hero-banners', marvelController.indexHeroBanners)

module.exports = router