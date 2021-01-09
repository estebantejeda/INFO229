require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log(`Escuchando en puerto ${3000}`);
});

mongoose.connect('mongodb://database/quotes', (err, res) => {
    if (err) throw err;
    console.log("DB online");
});