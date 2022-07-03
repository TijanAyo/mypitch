import express from "express"
import expressLayouts from "express-ejs-layouts"

const app = express()

app.set('view-engine', 'ejs')
app.set('layout', './views/layouts/main.ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)



export default app;