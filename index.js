const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//Middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECT, 
    () => console.log('connected to DB!')
);

app.listen(3001, () => console.log('Server up and running'));