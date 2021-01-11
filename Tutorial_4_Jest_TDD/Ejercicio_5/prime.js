function isPrime(num){
    if (num < 2) return false;
    for(let i = 2; i < num; i++) if(num%i === 0) return false;
    return num > 1;
}

function sumOfPrimes(array){
    let  sumPrime= 0;
    for(let i = 0; i < array.length; i++) if(isPrime(array[i])) sumPrime += array[i];
    return sumPrime;
}

module.exports = sumOfPrimes;   