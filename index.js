const express = require("express")

const app = express()

const bodyParser = require("body-parser")

let apiRoute = require("./routes/notes.routes")


app.use( bodyParser.urlencoded({ extended: true}))
app.use( bodyParser.json())

let PORT = process.env.port || 3000

app.listen( PORT, () => {console.log("Servver started on port: " + PORT)})

app.get( '/', (req,res) => {
    res.json({
        message: "Notes Application"
    })

})

// config database
const dbconfig = require("./config/database.config")

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect( dbconfig.url, {
    useNewUrlParser: true
}).then( () => {console.log("Connected to DB")})
.catch( err => {console.error(err)})

app.use('/api', apiRoute)


