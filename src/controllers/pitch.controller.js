const Pitch = require('../models/pitch.model')

// get pitch form page
const pitchForm = async (req, res) => {
    return res.render('create_pitch.ejs')
}

// create pitch
// POST
const createPitch = async (req, res) => {
    const {title, summary, description, link, image} = req.body

    const form = await Pitch.create({
        title, 
        summary, 
        description, 
        link, 
        image
    });

    if(form){
        return res.status(201).redirect('/pitch/available-pitch')
    }else{
        return res.status(400).render('create-pitch')
    }
}

// list all pitch on page
const listAllPitch = async (req, res) => {
    const pitch = await Pitch.find().sort('-createdAt')
    try{
        if(pitch) {
            return res.render('pitch.ejs', {pitch})
        }else{
            return res.status(400).render('pitch.ejs')
        }
    }catch(e){
        console.log(e)
        return res.status(500).json({
            status: 'Failed',
            message: 'Somthing went wrong',
        });
    }
}


// View pitch in more detailed manner


module.exports = {
    pitchForm,
    createPitch,
    listAllPitch
}