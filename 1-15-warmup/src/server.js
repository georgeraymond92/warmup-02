'use strict';
const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('viewengine', 'ejs');

app.use(express.static(`${__dirname}/../views`));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Root</h1>');
});

app.post('/save', (req,res) => {
  res.json(req.body);
});

app.get('/err', (req,res,next) => {
  next('err message');
});

app.use('*', (err,req,res,next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.render('error', {request:req, error:err});
});

module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.PORT || 3000;
    app.listen( PORT, () => { console.log(`App is listening on ${PORT}`) });
  },
};