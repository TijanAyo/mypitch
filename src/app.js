const express = require("express")
const expressLayouts = require( "express-ejs-layouts" )
const indexRoute = require( "./routes/index.route")
const authRoute = require( "./routes/auth.route")
const path = require( "path" )
const app = express()

app.set('view engine', 'ejs')
app.set('layout', '../views/layouts/main.ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(expressLayouts)


app.use('/', indexRoute)
app.use('/accounts', authRoute)

module.exports = app