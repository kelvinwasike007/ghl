require('dotenv').config()
const express = require('express')
var cors = require('cors');

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL).then(e=>console.log("CONNECTED")).catch(e=>console.log(e.message))

const app = express()
app.use(cors());
app.use(express.json())

const routes = require('./routes.js')

app.use(routes)


app.listen(process.env.PORT, ()=>{console.log("SERVER STARTED");})