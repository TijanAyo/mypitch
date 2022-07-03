const express = require("express")
const expressLayouts = require( "express-ejs-layouts" )
const indexRoute = require( "./routes/index.route")
const authRoute = require( "./routes/auth.route")
const profileRoute = require("./routes/profile.route")
const session = require('express-session')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const path = require( "path" )
const app = express()

app.set('view engine', 'ejs')
app.set('layout', '../views/layouts/main.ejs')

app.use(session({
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // if true: only transmit cookie over https
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000*60*60*60, // session max age in milliseconds
        sameSite: 'lax' // make sure sameSite is not none
    }
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(expressLayouts)



app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRoute)
app.use('/account', authRoute)
app.use('/profile', profileRoute)

module.exports = app