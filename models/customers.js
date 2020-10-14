const mongoose = require('mongoose');

const custSchema = new mongoose.Schema({
    name={
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    isGold={
        type:Boolean,
        required:true,
        default:false
    },
    phone={
        type:Number,
        required:true,
        min:7,
        max:10
    }
});

const Customer = moongoose.Model('Customer',custSchema);

module.exports.Customer = Customer;