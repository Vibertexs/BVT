const express = require('express');

const app = express();

app.get('/book', (req, res) => {
    const books = [
        {title: 'Book 1' },
        {title: 'Book 2' },
        {title: 'Book 3' }
    ];

    res.json(books);

});


app.post('/book', (req, res) => {
    const newBook = req.body;
    console.log('new book', newBook);

    res.send('new book added');
});

app.listen(3000, () => console.log('Listening on port 3000...'));