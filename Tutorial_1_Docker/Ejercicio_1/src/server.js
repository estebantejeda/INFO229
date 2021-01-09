const {PORT} = require('./config/config');

const express = require('express');
const bot = require('./index');
const app = express();

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});