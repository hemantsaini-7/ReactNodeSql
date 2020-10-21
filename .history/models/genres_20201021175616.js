const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const genSchema = new mongoose.Schema({
    name={
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
});
const Genre = moongoose.Model('Genre',genSchema);

module.exports.genSchema= genSchema;
module.exports.Genre = Genre;
module.exports.validate = validateGenre;
