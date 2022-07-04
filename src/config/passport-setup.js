require('dotenv').config()

const passport = require("passport")
const googleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../models/auth.model')


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})



passport.use(
    new googleStrategy({
        // options for strategy here
        callbackURL: `http://localhost:${process.env.PORT}/account/google/redirect`,
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleSecretID
    }, (accessToken, secretToken, profile, done) =>{
        // CHECK IF USER EXIST IN OUR DB
        User.findOne({googleid: profile.id}).then((currentUser) => {
            if(currentUser){
                // user already exist
                // console.log(`User exist as: ${currentUser}`)
                done(null, currentUser)
            }
            else{
                // User does not exist
                new User({
                    first_name: profile._json.family_name,
                    last_name: profile._json.given_name,
                    name: profile.displayName,
                    email: profile._json.email,
                    googleId: profile.id
                }).save().then((newUser) => {
                    // console.log(`User created: ${newUser}`)
                    done(null, newUser)
                })
            }
        }) 
    })
)