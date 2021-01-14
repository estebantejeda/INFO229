const cheerio = require('cheerio');
const request = require('request');

const URL = 'http://2020.cineclubuach.cl/';

request(URL, (err, res, body) => {
    let $ = cheerio.load(body);
    let text = $('td').text();
    text = filterData(text);
});

function filterData(array){
    data = [];
    array = array.split("\n");
    array.forEach(e => {
        if(e.trim().length > 0) data.push(e.trim());
    });
    return data;
}