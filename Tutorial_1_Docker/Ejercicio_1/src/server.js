const {PORT} = require('./config/config');

const express = require('express');
const bot = require('./bot');
const app = express();

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});