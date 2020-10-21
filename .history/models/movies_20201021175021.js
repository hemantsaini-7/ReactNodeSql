const mongoose = require('mongoose');

const movieSchema = {
    title: String,
    genre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Genre'
    },
    numberInStock: Number,
    dailyRentalRate: Number,
}
