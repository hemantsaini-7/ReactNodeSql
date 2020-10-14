const mongoose = require('mongoose');
const express = require('express');
const app = express();
const home = require('./routes/home');
const genres = require('./routes/genres');
const customers = require('./routes/customers');

mongoose.connect('')
        .then(()=> console.log("Connecting to MongoDB"))
        .catch((err)=> console.error("Failed to Connect",err.message));

app.use('/',home);
app.use('/api/genres',genres);
app.use('/api/customers',customers);


app.listen(3000,()=> console.log("Connecting to port 3000"));