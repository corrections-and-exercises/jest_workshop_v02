const {sortArray} = require('../utils/sort.js');

it('should sort an array of numbers starting with the smallest one', () => {
  const originalArray = [5, 3, 4, 2, 1];
  const expectedResult = [1, 2, 3, 4, 5];

  const result = sortArray(originalArray);

  expect(result).toEqual(expectedResult);
});
