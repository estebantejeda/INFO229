function getMin(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(min > array[i]) min = array[i];
    }
    return min;
}

function getMinPro(array){
    let min = Math.min.apply(null, array);
    return min;
}

module.exports = {
    getMin,
    getMinPro
}