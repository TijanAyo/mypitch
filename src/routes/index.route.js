const express = require('express')
const {homePageHandler,
    aboutPageHandler,
    servicePageHandler} = require( "../controllers/index.controller" )
const router = express.Router()

router.get('/', homePageHandler);
router.get('/about', aboutPageHandler);
router.get('/service', servicePageHandler);


module.exports = router