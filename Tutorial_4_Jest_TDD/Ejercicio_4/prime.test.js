const isPrime = require('./prime');

test('isPrime function must return true' , () => {
    let input = 7;
    let prime = isPrime(input);
    expect(prime).toBe(true);
});

test('isPrime function must return true' , () => {
    let input = 1;
    let prime = isPrime(input);
    expect(prime).toBe(false);
});

test('isPrime function must return true' , () => {
    let input = 12;
    let prime = isPrime(input);
    expect(prime).toBe(false);
});