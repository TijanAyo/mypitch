const express = require('express')
const { renderProfilePage } = require('../controllers/profile.controller')
const router = express.Router()

// dashboard page
router.get('/dashboard', renderProfilePage)


module.exports = router