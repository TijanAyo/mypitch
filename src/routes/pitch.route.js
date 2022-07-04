const express = require('express')
const router = express.Router()
const {listAllPitch, pitchForm, createPitch, } = require('../controllers/pitch.controller')

// GET: Form page
// /pitch/form
router.get('/form', pitchForm)

// POST: Create a pitch 
router.post('/form', createPitch)

// GET: All available pitch in the database
// pitch/available-pitch
router.get('/available-pitch', listAllPitch)



module.exports = router