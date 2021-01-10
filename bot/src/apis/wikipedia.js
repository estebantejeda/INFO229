const wiki = require('wikijs').default;
const {sendMessage} = require('./../bots/client');

function searchWiki(text){
    wiki({apiUrl: "https://es.wikipedia.org/w/api.php"})
        .page(text)
        .then(page => data = page.summary())
        .then(data => sendMessage(data.split("\n")[0]))
        .catch(err => sendMessage("Articulo no encontrado"));
}

module.exports = {
    searchWiki
};