const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Routes
const sAuth = require('./routes/seekerAuth');
const rAuth = require('./routes/recruiterAuth');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Routes Middlewares
app.use('/api/joblogin', sAuth);
app.use('/api/reclogin', rAuth);

//connect to db
mongoose.connect(process.env.DB_CONNECT, 
    () => console.log('connected to DB!')
);

//Connect to server
app.listen(3002, 
    () => console.log('Server up and running')
);