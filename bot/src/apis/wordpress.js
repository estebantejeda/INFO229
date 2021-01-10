const {USERNAME, PASSWORD} = require('../config/config');
const wordpress = require( "wordpress" );
const {sendMessage} = require('./../bots/client');

const client = wordpress.createClient({
    url: "https://info229nodebot.wordpress.com/",
    username: USERNAME,
    password: PASSWORD
});

function postWordpress(text){
    let data = trimData(text);
    if(data === -1) return sendMessage("Error: Formato inválido. \nEjemplo: [Wordpress] Titulo - Texto");
    if(data[0].length === 0 || data[1].length === 0) return sendMessage("Error: Formato inválido. \nEjemplo: [Wordpress] Titulo - Texto");
    data = createData(data);
    client.newPost(data, (err, post) => {
        sendMessage("Publicado!");
        client.getPost(post, (err, info) => sendMessage(info.link));
    });
}

function trimData(text){
    if(text.indexOf("-") === -1) return -1;
    text = text.split('-');
    for(let i = 0; i < 2; i++) text[i] = text[i].trim();
    return text;
}

function createData(text){
    let data = {
        type: "post",
        title: text[0],
        content: text[1],
        status: "publish"
    }
    return data;
}

module.exports = {
    postWordpress
};