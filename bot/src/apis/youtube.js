const youtube = require('youtube-sr');
const {sendMessage} = require('./../bots/client');

function searchYoutube(text){
    youtube.search(text,{limit: 1})
        .then(data => {
            if(Object.entries(data) == 0) sendMessage("Video no encontrado");
            else sendMessage(`https://www.youtube.com/watch?v=${data[0].id}`);
        })
        .catch(console.error);
}

module.exports = {
    searchYoutube
};