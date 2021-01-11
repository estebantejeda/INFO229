function inverseString(text){
    let stringLength = text.length;
    let aux = "";
    while(stringLength >= 0){
        aux = aux+text.charAt(stringLength);
        stringLength--;
    }
    return aux;
}

function inverseStringPro(text){
    return text.split('').reverse().join('');
}

module.exports = {
    inverseString,
    inverseStringPro
}