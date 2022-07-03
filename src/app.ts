import express from "express"
import expressLayouts from "express-ejs-layouts"
import indexRoute from "../src/routes/index.route"
import authRoute from "../src/routes/auth.route"
import path from "path"
const app = express()

app.set('view engine', 'ejs')
app.set('layout', '../views/layouts/main.ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(expressLayouts)


app.use('/', indexRoute)
app.use('/accounts', authRoute)

export default app;