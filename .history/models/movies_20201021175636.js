const mongoose = require('mongoose');
const genSchema = require('./genres')
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true,
        minlength:5,
        maxlength:200
    },
    genre:{
        type:genSchema,
        required:true
    },
    numberInStock: Number,
    dailyRentalRate: Number,
});

const Movie = mongoose.model('Movie',movieSchema);
