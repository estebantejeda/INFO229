const wordpress = require( "wordpress" );
const {sendMessage} = require('./../bots/client');

const client = wordpress.createClient({
    url: "https://info229nodebot.wordpress.com/",
    username: "estebantejeda",
    password: "testbot01"
});

function postWordpress(text){
    let data = trimData(text);
    data = createData(data);
    client.newPost(data, (err, post) => {
        sendMessage("Publicado!");
        client.getPost(post, (err, info) => sendMessage(info.link));
    });
}

function trimData(text){
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