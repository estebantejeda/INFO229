const inverseString = require('./inverse').inverseString;

test("inverseString function must return aloh", () => {
    let input = "hola";
    let inverse = inverseString(input);
    expect(inverse).toMatch("aloh");
});

test("inverseString function must return 922ofni", () => {
    let input = "info229";
    let inverse = inverseString(input);
    expect(inverse).toMatch("922ofni");
});

test("inverseString function must return SJ", () => {
    let input = "JS";
    let inverse = inverseString(input);
    expect(inverse).toMatch("SJ");
});