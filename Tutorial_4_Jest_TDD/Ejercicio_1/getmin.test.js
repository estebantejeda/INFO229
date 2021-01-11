const getmin = require('./getmin');

test('getMin function must return 4' , () => {
    let input = [4, 8, 6, 45, 50, 7];
    let min = getmin.getMin(input);
    expect(min).toEqual(4);
});

test('getMin function must return 7' , () => {
    let input = [9, 8, 9, 45, 50, 7];
    let min = getmin.getMin(input);
    expect(min).toEqual(7);
});

test('getMin function must return 0' , () => {
    let input = [0, 1, 2, 3, 4, 5];
    let min = getmin.getMin(input);
    expect(min).toEqual(0);
});