
const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
   
     title: {type: String, required: true},
     author: {type: String, required: true},
     year: {type: String, required: true},
     songs: {type: String, required: true},
     person: {type: String, required: true},
     favorite: {type: String, required: true},
     commentary: {type: String, required: true},
     imagePath: {type: String, required: true},
     created_at: {type: Date, default: Date.now}
        
});

module.exports = model('Book', BookSchema);