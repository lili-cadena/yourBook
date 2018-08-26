const router = require ('express').Router();
const fetch   = require('node-fetch');
const Book = require ('../models/Book');

const url = 'https://www.googleapis.com/books/v1/volumes?q='

router.get('/', (req, res) => {
    fetch(url+'"Elizabeth Bennet"+inauthor:"Austen"')
    .then(results => results.json())
    .then(books => {
        res.send(books)
    });
});


module.exports = router;