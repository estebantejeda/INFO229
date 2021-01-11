const sumOfPrimes = require('./prime');

test('sumOfPrimes function must return 7' , () => {
    let input = [4, 8, 6, 45, 50, 7];
    let prime = sumOfPrimes(input);
    expect(prime).toEqual(7);
});

test('sumOfPrimes function must return 7' , () => {
    let input = [9, 8, 2, 45, 50, 7];
    let prime = sumOfPrimes(input);
    expect(prime).toEqual(9);
});

test('sumOfPrimes function must return 10' , () => {
    let input = [0, 1, 2, 3, 4, 5];
    let prime = sumOfPrimes(input);
    expect(prime).toEqual(10);
});