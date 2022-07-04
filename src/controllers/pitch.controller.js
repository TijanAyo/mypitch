const { RESERVED_EVENTS } = require('socket.io/dist/socket')
const Pitch = require('../models/pitch.model')

// get pitch form page

const renderPitchForm = (req, res) => {
    return res.render('create-pitch')
}


// create pitch
// POST
const createPitch = async (req, res) => {
    try{
        const {title, summary, description, link} = req.body

        const form = await Pitch.create({
            title, summary, description, link
        })

        if(form){
            return res.status(201).redirect('/pitch/all-pitch')
        }
        return res.status(400).render('create-pitch')
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }

}


// list all pitch on page
// GET
const allAvailablePitch = async (req, res) => {
    const pages = await Pitch.find().sort('-createdAt')

    res.status(200).render('pitch')
}


// View pitch in more detailed manner


module.exports = {
    renderPitchForm,
    createPitch,
    allAvailablePitch
}