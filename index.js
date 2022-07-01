const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();
const cookieParser = require("cookie-parser");

//Routes
const rAuth = require('./routes/recruiterAuth');
const sauth = require('./routes/seekerAuth');

//Middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes Middlewares
app.use('/api', rAuth);
app.use('/api', sauth);

//connect to db
mongoose.connect(process.env.DB_CONNECT, 
    () => console.log('connected to DB!')
);

//Connect to server
app.listen(3002, 
    () => console.log('Server up and running')
);