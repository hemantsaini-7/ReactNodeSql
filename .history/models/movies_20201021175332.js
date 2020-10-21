const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
    required:true,
    trim: true,
}
    genre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Genre'
    },
    numberInStock: Number,
    dailyRentalRate: Number,
});

const Movie = mongoose.model('Movie',movieSchema);
const Genre= moongoose.Model('Genre',new mongoose.Schema({
    name: String,
}))