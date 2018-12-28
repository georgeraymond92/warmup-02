'use strict';

const express = require('express');
const app = express();

// EJS Template Setup
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// static routes
app.use( express.static(`${__dirname}/public`) );

// app middleware
app.use( express.json() );


app.get('/', (req, res) =>{
    res.send('<h1>Hello From App /</h1>')
});

app.post('/save' , (req,res) => {
    res.json(req.body);
});

app.get('/err', (req,res,next) => {
    next('This is a catastrophic error');
});

app.get('*', (req, res) => {
    res.status(404);
    res.statusMessage = 'Not Found';
    res.render('not-found', {request:req});
});

app.use((err, req, res, next) => {
    res.status(500);
    res.statusMessage = 'Server Error';
    res.render('error', {request:req, error: err});
});

app.listen(5050, () => console.log('app listening on 5050'));

module.exports = {
    server: app,
    start: () => {
        const port = process.envport || 5050;
        app.listen(port, () => console.log('server up on port', port));
    },
};