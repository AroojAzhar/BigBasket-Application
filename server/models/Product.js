const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name : {
        type: String, //Capital S mongoDb type
        required : true
    },

    image : {
        type : String,
        required : true
    },

    price : {
        type: Number,
        required: true
    },

    qty : {
        type : Number,
        required : true
    },

    created : {
        type : Date,
        default : Date.now
    }

});

let Product = mongoose.model('product' , ProductSchema);

module.export = Product;