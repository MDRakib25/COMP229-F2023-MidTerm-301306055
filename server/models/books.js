/*
  File: books.js
  Author: MD Rakib
  Student ID: 301306055
  Web App Name: Favourite Book List
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
