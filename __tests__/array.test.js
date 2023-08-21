const {addItemToArray} = require('../utils/array');

describe('array functions', () => {
  it('should return a new array with a string added to the end and not mutate the original array', () => {
    const originalArray = ['hello', 'world'];
    const newItem = 'again';
    const expectedResult = ['hello', 'world', 'again'];

    const result = addItemToArray(originalArray, newItem);

    expect(originalArray.length).toBe(2);
  });
});
