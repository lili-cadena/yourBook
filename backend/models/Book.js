const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    previewLink: {
        type: String,
    },
    authors:[
        {
            type: String,
        },
    ] 
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Book', bookSchema);