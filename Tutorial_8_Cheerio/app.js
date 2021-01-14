const cheerio = require('cheerio');
const request = require('request');

const URL = 'http://2020.cineclubuach.cl/';

request(URL, (err, res, body) => {
    let $ = cheerio.load(body);
    let text = $('td').text();
    text = filterData(text);
    text = dataToArray(text);
    console.log(text);
});

function filterData(array){
    data = [];
    array = array.split("\n");
    array.forEach(e => {
        if(e.trim().length > 0) data.push(e.trim());
    });
    return data;
}

function dataToArray(array){
    let k = 0;
    let data = [];
    for(let i = 0; i < array.length; i+=3){
        data[k] = {
            fecha: array[i],
            horario: array[i+1],
            titulo: array[i+2]
        }
        k++;
    }
    return data;
}