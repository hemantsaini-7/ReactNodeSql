const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true,
        minlength:5,
        maxlength:200
    },
    genre:{
        type:genreSchema,
        required:true
    },
    numberInStock: Number,
    dailyRentalRate: Number,
});

const Movie = mongoose.model('Movie',movieSchema);
const Genre= moongoose.Model('Genre',new mongoose.Schema({
    name: String,
}))