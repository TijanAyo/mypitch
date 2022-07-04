const express = require('express')
const router = express.Router()

const {allAvailablePitch, renderPitchForm, createPitch} = require('../controllers/pitch.controller')

// GET: Form page
router.get('/form', renderPitchForm)

// POST: Create a pitch 
router.post('/form', createPitch)

// GET: All available pitch in the database
router.get('/available-pitch', allAvailablePitch)



module.exports = router