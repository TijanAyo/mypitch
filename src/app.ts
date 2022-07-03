import express from "express"

const app = express()

app.set('view-engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))



export default app;