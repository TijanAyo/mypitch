const express = require('express')
const router = express.Router()

const {allAvailablePitch, renderPitchForm, createPitch} = require('../controllers/pitch.controller')

// GET: Form page
router.get('/', renderPitchForm)

// POST: Create a pitch 
router.post('/', createPitch)

// GET: All available pitch in the database
router.get('/available-pitch', allAvailablePitch)



module.exports = router