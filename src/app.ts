import express from "express"
import expressLayouts from "express-ejs-layouts"
import indexHandler from "../src/routes/index.route"
import authHandler from "../src/routes/auth.route"

const app = express()

app.set('view engine', 'ejs')
app.set('layout', '../views/layouts/main.ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)


app.use(indexHandler)
app.use('/accounts', authHandler)

export default app;