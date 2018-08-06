const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
var cors = require('cors')

const users = require('./routes/api/users')
const students = require('./routes/api/students')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

// Passsport middleware
app.use(passport.initialize())

//  Passport Config
require('./config/passport.js')(passport)



// Use Routes
app.use('/api/users', users)
app.use('/api/students', students)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))