
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    name: { type: String},
    age: { type: Number},
    sex: { type: String },
    link: { type:String },
    img: { type: String},
    content: { type: String},
    
  });
const people = mongoose.model('people', peopleSchema)

module.exports = people;