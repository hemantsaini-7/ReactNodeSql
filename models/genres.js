const mongoose = require('mongoose');

const genSchema = new mongoose.Schema({
    name={
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
});

const Genre = moongoose.Model('Genre',genSchema);

module.exports.Genre = Genre;