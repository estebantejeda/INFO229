const {WebClient} = require('@slack/web-api');
const {URL, TOKEN} = require('./config/config');
const mongo = require('mongodb');
const wiki = require('wiki-page');
const web = new WebClient(TOKEN);

let title = "Batman";
const params = {
    section: 'page',
    type: 'summary',
    title
}

wiki.fetch(params, (data) => {
    if(!data.extract) sendMessage("No encontrado");
    else insertDB({text: data.extract});
    }
);

function insertDB(obj){
    mongo.connect(URL, (err, db) => {
        if(err) return console.log(err);
        let dbo = db.db("database");
        dbo.collection("wikipedia").insertOne(obj, (err, res) => {
            if(err) throw err;
            sendMessage(res.ops[0].text);
            db.close();
        })
    })
}

async function sendMessage(message){
    await web.chat.postMessage({
        channel: "#general",
        text: message
    });
}
module.exports = web;