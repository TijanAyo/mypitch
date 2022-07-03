const express = require('express')
const router = express.Router()


const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/account/register')
    }
    else{
        next()
    }
}

router.get('/dashboard', authCheck, (req, res)=> {
    return res.render('profile', {name: req.user})
});


module.exports = router