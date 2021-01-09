const {WebClient} = require('@slack/web-api');
const {URL, TOKEN} = require('./config/config');
const mongo = require('mongodb');

const web = new WebClient(TOKEN);

mongo.connect(URL, (err, db) => {
    if(err) return console.log(err);
    let dbo = db.db("database");
    dbo.collection("quotes").aggregate([{$sample:{size:1}}]).toArray((err, result) => {
        sendMessage(result[0].message);
    });
});

async function sendMessage(message){
    await web.chat.postMessage({
        channel: "#general",
        text: message
    });
}

module.exports = web;