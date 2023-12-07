const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    res.send({
        quote: getRandomElement(quotes)
    });
});

app.get('/api/quotes', (req, res, next) => {
    const queryParams = req.params; 

    if (req.query.person) {
        const selectedQuotes = quotes.filter(quote => quote.person === req.query.person);
        res.send({
            quotes: selectedQuotes
        });
        
    } else {
        res.send({
            quotes: quotes
        });
    }
});

app.post('/api/quotes', (req, res, next) => {
    const newId = quotes.length + 1

    const newQuote = {
        id: `${newId}`,
        quote: req.query.quote,
        person: req.query.person
    }

    if (newQuote.quote && newQuote.person) {
        quotes.push(newQuote);
        
        res.send({ quote: newQuote });

    } else {
        res.status(400).send();
    }
});

app.put('/api/quotes/:id', (req, res, next) => {
    const index = quotes.findIndex(x => x.id === req.params.id);

    if (index >= 0 && index <= quotes.length) {
        quotes[index] = {
            id: req.params.id,
            quote: req.query.quote,
            person: req.query.person
        };
        res.status(200).send(quotes[req.params.id]);

    } else {
        res.status(400).send();
    }    
});

app.delete('/api/quotes/:id', (req, res, next) => {
    const index = quotes.findIndex(x => x.id === req.params.id);
    
    if (index >= 0 && index <= quotes.length) {
        quotes.splice(index, 1);
        res.status(200).send(quotes);
    } else {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});