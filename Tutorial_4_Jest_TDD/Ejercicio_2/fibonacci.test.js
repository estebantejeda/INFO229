const fibonacci = require('./fibonacci');

test('fibonacci function must return 4' , () => {
    let input = 5;
    let num = fibonacci(input);
    expect(num).toEqual(5);
});

test('fibonacci function must return 1' , () => {
    let input = 1;
    let num = fibonacci(input);
    expect(num).toEqual(1);
});

test('fibonacci function must return 13' , () => {
    let input = 8;
    let num = fibonacci(input);
    expect(num).toEqual(21);
});