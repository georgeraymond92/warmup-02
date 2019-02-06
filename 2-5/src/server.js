'use strict';

const express = require('express');
const app = express();

app.set('views', '../public');
app.set('view-engine', 'ejs');

app.use(express.json());

app.get('/', (req,res) => {
  res.send('<h1>root path</h1>');
});

app.get('/save', (req,res) => {
  res.join(req.body);
});

app.get('/err', (req,res,next) => {
  next('error');
});

app.get('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Page Not Found';
  res.render('not-found', {reqest:req});
});

app.use( (err , req , res , next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.render('error', { request: req, error:err});
});


// exporting the server
module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
  },
};