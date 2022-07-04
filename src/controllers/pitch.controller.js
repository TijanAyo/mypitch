const Pitch = require('../models/pitch.model')

// get pitch form page
const pitchForm = async (req, res) => {
    return res.render('create_pitch.ejs')
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
            return res.status(201).redirect('/pitch/available-pitch')
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
    return res.render('pitch.ejs')
}


// View pitch in more detailed manner


module.exports = {
    pitchForm,
    createPitch,
    allAvailablePitch
}