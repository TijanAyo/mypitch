const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/register', (_req, res)=>{res.render('signin')})


router.get('/logout', (req, res)=>{
    req.logout((err) => {
        if (err){ 
            return next(err); 
        }
        res.redirect('/');
    });
})


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

// GOOGLE REDIRECT
router.get('/google/redirect', passport.authenticate('google'),(_req, res)=>{
    res.redirect('/profile/dashboard')
});

module.exports = router