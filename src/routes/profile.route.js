const express = require('express')
const { renderDashboard } = require('../controllers/profile.controller')
const {authCheck} = require('../middleware/authcheck')
const router = express.Router()

// dashboard page
router.get('/dashboard', authCheck, renderDashboard)


module.exports = router