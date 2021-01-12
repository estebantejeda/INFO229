const PORT = 3000;
const express = require('express');
const wiki = require('wikijs').default;
const app = express();

app.listen(PORT, () => {
    console.log(`Listen ${PORT} port`);
});

app.get('/', (req, res) => {
    res.send("Entra a http://localhost:"+PORT+"/wiki/BUSCA para buscar!");
})

app.get('/wiki/:name', (req, res) => {
    let name = req.params.name;
    wiki({apiUrl: "https://es.wikipedia.org/w/api.php"})
        .page(name)
        .then(page => data = page.summary())
        .then(data => res.json(data.split("\n")))
        .catch(err => res.json("Articulo no encontrado"));
});